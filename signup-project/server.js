const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/users_db', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error connecting to MongoDB:', error));

// Define a schema for the users
const userSchema = new mongoose.Schema({
  name: String,
  address: String,
  age: Number,
  phone: String,
  role: String,
  yearOfPassing: Number,
  email: { type: String, unique: true }, // email should be unique
  password: String
});

// Create a model for the users
const User = mongoose.model('User', userSchema);

// POST route for user signup
app.post('/signup', async (req, res) => {
  const { name, address, age, phone, role, yearOfPassing, email, password } = req.body;

  // Server-side validation
  if (!email.endsWith('@svce.ac.in')) {
    return res.status(400).json({ error: 'Please use an institutional email (@svce.ac.in).' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ name, address, age, phone, role, yearOfPassing, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// POST route for user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

