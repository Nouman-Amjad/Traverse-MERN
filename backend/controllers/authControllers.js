import User from "../models/User.js";
import bcrypt from 'bcryptjs'
//import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {

        const { username, email, password, photo } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide username, email, and password' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            photo
        });

        await newUser.save();
        res.status(200).json({ success: true, message: 'Successfully Created' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create. Try Again' });
    }
}; 
 
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Incorrect email or password' });
        }

        res.status(200).json({ success: true, message: 'Successfully logged in', data: {} });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to login. Please try again later.' });
    }
};

 