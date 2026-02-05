const { body } = require('express-validator');

exports.menuValidation = [
  body('name').notEmpty().withMessage('Name required'),

  body('category').notEmpty().withMessage('Category required'),

  body('price')
    .isNumeric()
    .withMessage('Price must be number')
];
