const User = require('../Models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
      const { nom, prenom, email, password } = req.body;
  
      // Check if the user with the given email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        nom,
        prenom,
        email,
        password: hashedPassword,
        role: 'user',
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Generate access token for the new user
      const accessToken = jwt.sign(
        { userId: newUser._id, email: newUser.email },
        process.env.JWT_SECRET || 'default_secret',
        { expiresIn: '3d' }
      );
  
      // Send a response with the access token
      res.status(201).json({ access_token: accessToken, user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const accessToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '3d' }
    );

    const refreshToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_REFRESH || 'default_refresh_secret',
      { expiresIn: '7d' }
    );

    res.cookie('access_token', accessToken, { httpOnly: true, secure: false });
    res.cookie('refresh_token', refreshToken, { httpOnly: true });

    res.status(200).json({ access_token: accessToken, refresh_token: refreshToken, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const logout = (req, res) => {
  res.clearCookie('access_token');
  res.clearCookie('refresh_token');
  return res.status(200).json({ message: 'Logged out' });
};

module.exports = { login, logout , register };