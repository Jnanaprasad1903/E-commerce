import Product from "../models/productModel.js";

// @desc   Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// @desc   Create a product
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, image, category, stock, brand } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
      image,
      category,
      stock,
      brand,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: "Invalid product data" });
  }
};