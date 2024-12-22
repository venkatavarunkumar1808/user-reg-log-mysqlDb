const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser } = require('../models/user');
const { validateInput } = require('../utils/validateInput');

// User Registration
async function register(req, res, next) {
    try {
        const { name, email, password } = req.body;
        const validationError = validateInput({ name, email, password });
        if (validationError) return res.status(400).json({ error: validationError });

        const existingUser = await findUserByEmail(email);
        if (existingUser) return res.status(400).json({ error: 'Email already in use.' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = await createUser(name, email, hashedPassword);
        res.status(201).json({ message: 'User registered successfully.', userId });
    } catch (err) {
        next(err);
    }
}

// User Login
async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        if (!user) return res.status(404).json({ error: 'User not found.' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials.' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful.', token });
    } catch (err) {
        next(err);
    }
}

module.exports = { register, login };
