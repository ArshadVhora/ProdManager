import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../controllers/product_controller.js';
import Authmiddleware from "../middleware/auth_middleware.js"
const router = express.Router();

// Routes
router.post('/', Authmiddleware, createProduct);            // Create
router.get('/', Authmiddleware, getProducts);               // Read all
router.get('/:id', Authmiddleware, getProductById);         // Read one
router.put('/:id', Authmiddleware, updateProduct);          // Update
router.delete('/:id', Authmiddleware, deleteProduct);       // Delete

export default router;
