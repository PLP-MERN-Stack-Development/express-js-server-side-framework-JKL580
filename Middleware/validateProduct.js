// middleware/validateProduct.js
const { ValidationError } = require('../errors/ValidationError');

module.exports = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || price == null || !category || inStock == null) {
    return next(new ValidationError('All fields are required.'));
  }

  if (typeof price !== 'number') {
    return next(new ValidationError('Price must be a number.'));
  }

  if (typeof inStock !== 'boolean') {
    return next(new ValidationError('inStock must be true or false.'));
  }

  next();
};
