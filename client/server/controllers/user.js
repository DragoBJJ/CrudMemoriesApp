import bcrypt from 'bcryptjs';
import User from '../models/users.js.js';
import jwt from 'jsonwebtoken';

const TEST = 'test';

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  ``;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User doesn't exist." });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(400).json({ message: 'Invalid Credentials' });
    }

    const token = await jwt.sign({ email: user.email, id: user._id }, TEST, {
      expiresIn: '1h',
    });

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  console.log(email);
  try {
    const useExist = await User.findOne({ email });

    if (useExist) {
      res.status(400).json({ message: 'User already exists.' });
    }
    if (password !== confirmPassword) {
      res.json({ message: 'Passwords no matches.' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name: `${firstName} ${lastName}`,
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, TEST, {
      expiresIn: '1h',
    });

    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.json({ message: error });
  }
};
