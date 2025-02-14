const dotenv = require('dotenv'); //environment variables
const express = require('express');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

//mongoDB schema
const User = require('../models/User');
const Workout = require('../models/Workout');


/* CREATE ACCOUNT / SIGN IN / SIGN OUT / AUTHENTICATE USER */
//creating account
router.post('/createaccount', async (req, res) => {
    try{
        // console.log('Received request: ', req.body);
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({error: 'All Fields Required.'});
        }

        //check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({error: 'Email already in use.'});

        //generate unique UID
        const uid = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new user
        const newUser = new User({uid, name, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json({message: 'Account Successfully Created!'});
    }
    catch (error){
        console.error('Error Creating Account.')
        res.status(500).json({message: 'Error Creating Account.'})
    }
});

//logging in
router.post('/login', async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).json({error: 'Invalid Email or Password.'});
        }

        const token = jwt.sign(
            {uid: user.uid, name: user.name, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: '7d'});
        // res.cookie('token', token, {httpOnly: true, secure: false}); //!set secure: true in production
        res.json({token, user: {uid: user.uid, name: user.name, email: user.email}});
    
    }
    catch(error){
        console.error('Login Error: ', error);
        res.status(500).json({error: 'Login Error.'});
    }
}); 

//log out
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({message: 'Logged out.'});
});

//authenticate user session
router.get('/user', (req, res) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({error: 'User Not Authenticated.'});

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if(err) return res.status(401).json({error: 'Invalid Token.'});
        const user = await User.findById(decoded.userId);
        res.json({email: user.email});
    });
});

/* WEBPAGE SPECIFIC */
//index page route
router.get('/', (req, res) => {
    res.json('Fortnite battle pass is swag!');
});

//workouts page
router.get('/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.setHeader('Content-Type', 'application/json'); //force json
        res.json(workouts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;