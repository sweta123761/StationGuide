import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
}

export const generateToken = async (id) => {
  return await jwt.sign({ id }, config.jwtSecret, {
    expiresIn: '30d'
  });
}

export const verifyToken = async (token) => {
  return await jwt.verify(token, config.jwtSecret);
}

export const addCookie = (res, name, value) => {
  res.cookie(name, value, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });
}

export const removeCookie = (res) => {
  res.clearCookie('token');
}

export const getCookies = (req, name) => {
  return req.cookies[name];
}