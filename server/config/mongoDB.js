const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.USER;
const password = process.env.PASSWORD;

try {
    mongoose.connect(`mongodb+srv://${username}:${password}@shortener.p1qjtsq.mongodb.net/`);
    console.log('MongoDB connected successfully');
} catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
}