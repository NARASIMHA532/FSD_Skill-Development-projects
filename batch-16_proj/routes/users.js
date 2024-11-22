const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator'); // Importing express-validator
const router = express.Router();

// Register a new user with validation
router.post('/register', [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
});

// User login (simple example, no password hashing)
router.post('/login', async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
});

module.exports = router;
