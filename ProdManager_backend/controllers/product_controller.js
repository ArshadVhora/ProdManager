import Product from '../models/product_model.js';

// @desc    Create a new product
export const createProduct = async (req, res) => {
  try {
    const { title, image, description, price } = req.body;

    if (!title || !image || !description || !price) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product({ title, image, description, price });
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get all products
export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const keyword = req.query.keyword
      ? {
          $or: [
            { title: { $regex: req.query.keyword, $options: 'i' } },
            { description: { $regex: req.query.keyword, $options: 'i' } }
          ]
        }
      : {};

    const sortOption = req.query.sort || '-createdAt';

    const products = await Product.find(keyword)
      .sort(sortOption)
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments(keyword);

    res.json({
      page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      items: products,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// @desc    Get single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Update product
export const updateProduct = async (req, res) => {
  try {
    const { title, image, description, price } = req.body;

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { title, image, description, price },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: 'Product not found' });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Delete product
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });

    res.json({ message: 'Product deleted successfully', product: deleted });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
