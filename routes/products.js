// routes/products.js
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const validateProduct = require('../middleware/validateProduct');
const { ValidationError } = require('../errors/ValidationError');

const router = express.Router();

// GET /api/products - list all (with filtering, pagination, search)
router.get('/', (req, res) => {
  let products = req.app.locals.products;
  const { category, search, page = 1, limit = 10 } = req.query;

  if (category) {
    products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    products = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }

  const start = (page - 1) * limit;
  const paginated = products.slice(start, start + Number(limit));

  res.json({
    total: products.length,
    page: Number(page),
    limit: Number(limit),
    data: paginated
  });
});

// GET /api/products/:id
router.get('/:id', (req, res, next) => {
  const products = req.app.locals.products;
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new ValidationError('Product not found'));
  res.json(product);
});

// POST /api/products
router.post('/', validateProduct, (req, res) => {
  const products = req.app.locals.products;
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
router.put('/:id', validateProduct, (req, res, next) => {
  const products = req.app.locals.products;
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new ValidationError('Product not found'));
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// DELETE /api/products/:id
router.delete('/:id', (req, res, next) => {
  let products = req.app.locals.products;
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new ValidationError('Product not found'));
  const deleted = products.splice(index, 1);
  res.json({ message: 'Product deleted', deleted });
});

// GET /api/products/stats/count - stats by category
router.get('/stats/count', (req, res) => {
  const products = req.app.locals.products;
  const stats = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  res.json(stats);
});

module.exports = router;
