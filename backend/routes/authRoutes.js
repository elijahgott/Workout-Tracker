const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const uid = 100;

        //check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({error: 'Email already in use.'});

        //create new user
        const newUser = new User({name, email, password, uid});
        await newUser.save();

        res.status(201).json({message: 'User Successfully Created!'});
    }
    catch (error){
        res.status(500).json({message: 'My bad.'})
    }
});

module.exports = router;