import User from '../models/User.js';
import { hashPassword, comparePassword, generateToken, verifyToken, addCookie, getCookies, removeCookie } from '../utils/authFunctions.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    } else if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    } else if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    } else if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      name,
      email,
      phoneNumber,
      password: hashedPassword
    });

    await newUser.save();

    const token = await generateToken(newUser._id);

    addCookie(res, 'token', token);

    res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (error) {
    res.status(500).json({ error: error | 'Internal Server Error' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    } else if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = await generateToken(user._id);

    addCookie(res, 'token', token);

    res.status(200).json({ message: 'User logged in successfully', userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error | 'Internal Server Error' });
  }
};

export const logoutUser = async (req, res) => {
  try {
    removeCookie(res, 'token');

    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: error | 'Internal Server Error' });
  }
}

export const verifyUser = async (req, res) => {
  try {
    const token = getCookies(req, 'token');

    if (!token) {
      return res.status(400).json({ error: 'Invalid token' });
    }

    const decoded = await verifyToken(token);

    if (!decoded) {
      return res.status(400).json({ error: 'Invalid token' });
    }

    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    res.status(200).json({ message: 'User verified successfully', userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error | 'Internal Server Error' });
  }
};