import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Utility function for validating user input
export const validateUserInput = [
  body('name').isLength({ min: 20, max: 60 }).withMessage('Name must be between 20 and 60 characters.'),
  body('email').isEmail().withMessage('Email must be a valid email address.'),
  body('address').isLength({ max: 400 }).withMessage('Address must not exceed 400 characters.'),
  body('password').isLength({ min: 8, max: 16 }).matches(/[A-Z]/).matches(/[\W_]/).withMessage('Password must be 8-16 characters long and include at least one uppercase letter and one special character.'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Utility function for generating a random token (e.g., for password reset)
export const generateToken = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};