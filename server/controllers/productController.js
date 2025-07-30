import Product from '../models/Product.js';

// GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get products' });
  }
};

// GET /api/products/featured
const getFeaturedProducts = async (req, res) => {
  try {
    const featured = await Product.find({ isFeatured: true });
    res.json(featured);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get featured products' });
  }
};

// GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product' });
  }
};

// POST /api/products
const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Product creation failed' });
  }
};

// POST /api/products/bulk
const createManyProducts = async (req, res) => {
  try {
    const inserted = await Product.insertMany(req.body);
    res.status(201).json({
      success: true,
      insertedCount: inserted.length,
    });
  } catch (err) {
    res.status(500).json({ message: 'Bulk insert failed' });
  }
};

export {
  getAllProducts,
  getProductById,
  getFeaturedProducts,
  createProduct,
  createManyProducts,
};
