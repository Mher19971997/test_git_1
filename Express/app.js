const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

// Middleware
app.use(morgan('dev'));  // Логирование запросов
app.use(express.json());  // Обработка JSON

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Error handling
app.use(errorMiddleware);

module.exports = app;
