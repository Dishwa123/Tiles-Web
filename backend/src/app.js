const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/conn');
const User = require('./models/User');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB("mongodb+srv://disva:92651disva@cluster0.vwee7zn.mongodb.net/");

// Routes
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Failed to register user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      // User with provided email and password exists, send success response
      res.status(200).json({ message: 'Login successful' });
    } else {
      // User with provided credentials does not exist, send error response
      res.status(401).json({ message: 'Incorrect email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phonenumber, address, profession, postalcode, message } = req.body;

    // Create a new Contact document
    const newContact = new Contact({ name, email, phonenumber, address, profession, postalcode, message });
    
    // Save the new contact to the database
    await newContact.save();

    // Respond with success message
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Failed to submit form:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
