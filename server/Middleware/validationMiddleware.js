const { body, validationResult } = require('express-validator');

//  validation for registration
const registerValidationRules =  [
  body('nom').notEmpty().withMessage('Nom is required'),
  body('prenom').notEmpty().withMessage('Prenom is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

//  validation  for login
const loginValidationRules =  [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

// function to handle validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  registerValidationRules,
  loginValidationRules,
  validate,
};
