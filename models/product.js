const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: [String], required: true }, // Array of categories
    type: { type: [String], required: true }, // Array of types (indoor/outdoor)
    img: { type: [String], required: true }, // Array of image URLs
    slug: { type: String, required: true, unique: true },
    colors: { type: [String], default: [] }, // Array of color options
    designs: { type: [String], default: [] } // Array of design options
}, { timestamps: true });

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
