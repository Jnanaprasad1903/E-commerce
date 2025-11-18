import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String, default: "" },
    category: { type: String, required: true },
    stock: { type: Number, required: true, default: 1 },
    brand: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);