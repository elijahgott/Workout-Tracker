// run server:
// node server.js
// stop server:
// close terminal or npx kill-port 5000

const dotenv = require('dotenv'); //environment variables
const express = require('express'); //for api
const mongoose = require('mongoose'); //communicate with mongodb database
const cors = require('cors'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const authRoutes = require('../backend/routes/authRoutes');

//mongoDB schema
const User = require('./models/User');
const Workout = require('./models/Workout');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: ['http://localhost:5000', 'http://127.0.0.1:5500'],
            credentials: true}));
app.use('/api', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log('MongoDB Connection Error: ', err));


/* SIGN IN / CREATE ACCOUNT */

//register user
app.post('/api/createaccount', async (req, res) => {
    const {name, email, password, uid} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const user = await User.create({name, email, password: hashedPassword, uid});
        res.status(201).json({message: 'Account Created!'});
    }
    catch (err){
        res.status(400).json({error: 'User already exists.'});
    }
});

//login user
app.post('/api/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({error: 'Invalid Credentials.'});
    }

    const token = jwt.sign({userID: user.uid}, process.env.JWT_SECRET, {expiresIn: '7d'});
    res.cookie('token', token, {httpOnly: true, secure: false}); //!set secure: true in production
    res.json({message: 'Login Successful!'});
    console.log('signed in')
});

//logout user
app.post('/api/logout', (req, res) => {
    res.clearCookie('token');
    res.json({message: 'Logged out.'});
});

//authenticate user session
app.get('/api/user', (req, res) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({error: 'User Not Authenticated.'});

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if(err) return res.status(401).json({error: 'Invalid Token.'});
        const user = await User.findById(decoded.userId);
        res.json({email: user.email});
    });
});


//index page route
app.get('/api/', (req, res) => {
    res.json('Fortnite battle pass');
});

// GET: Fetch all workouts
app.get('/api/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.setHeader('Content-Type', 'application/json'); //force json
        res.json(workouts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

//start server
app.listen(PORT, () => console.log('Server running on port ', PORT));