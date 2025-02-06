// run server:
// node server.js
// stop server:
// close terminal or npx kill-port 5000

const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//mongoDB schema
const Workout = require('./models/Workout');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log('MongoDB Connection Error: ', err));

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