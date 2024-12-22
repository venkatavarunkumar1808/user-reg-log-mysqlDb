const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./utils/errorHandler');

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

