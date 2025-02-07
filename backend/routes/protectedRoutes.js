const express = require('express');
const authenticateToken = require('../middleware/authMiddleware'); // Import authentication middleware

const router = express.Router();

// protect the home route
router.get('/', authenticateToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.name}!`, user: req.user });
});

// protect the workouts route
router.get('/workouts', authenticateToken, async (req, res) => {
    try {
        // Example: Fetch user's workouts from the database
        const workouts = await Workout.find({ userId: req.user.uid });
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching workouts' });
    }
});

// protect the profile route
router.get('/profile', authenticateToken, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;