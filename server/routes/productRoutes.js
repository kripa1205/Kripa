// import express from 'express';
// import {
//     getAllProducts,
//     getProductById,
//     getFeaturedProducts,
//     createProduct,
//     createManyProducts, // ✅ new
// } from '../controllers/productControllers.js';

// const router = express.Router();

// router.get('/', getAllProducts);
// router.get('/featured', getFeaturedProducts);
// router.get('/:id', getProductById);
// router.post('/', createProduct);
// router.post('/bulk', createManyProducts); // ✅ NEW route

// export default router;

import express from 'express';
import {
  getAllProducts,
  getProductById,
  getFeaturedProducts,
  createProduct,
  createManyProducts
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/featured', getFeaturedProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.post('/bulk', createManyProducts);

export default router;