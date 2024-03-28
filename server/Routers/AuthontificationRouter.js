const express = require('express');
const { login , logout , register, UserCount }  = require('../Controllers/AuthontificationControle');
const { validate, registerValidationRules, loginValidationRules } = require('../Middleware/validationMiddleware');

const router = express.Router();

router.post('/login', loginValidationRules, validate, login); 
router.post('/logout', logout);
router.post('/register', registerValidationRules, validate , register);
router.get('/users/count',UserCount);

module.exports = router