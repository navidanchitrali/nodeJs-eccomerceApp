const express = require('express');
const router = express.Router();
const productViewModel = require('../viewmodels/productViewModel');

// Get all products
router.get('/getAllproducts', async (req, res) => {
  try {
    const products = await productViewModel.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a product by ID
router.get('/getSingleProduct/:id', async (req, res) => {
  try {
    const product = await productViewModel.getProductById(req.params.id);
    if (product === null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a product
router.post('/addProduct', async (req, res) => {
  try {
    const product = await productViewModel.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a product
router.put('/updateProduct/:id', async (req, res) => {
  try {
    const product = await productViewModel.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a product
router.delete('/deleteProduct', async (req, res) => {
  try {
    await productViewModel.deleteProduct(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
