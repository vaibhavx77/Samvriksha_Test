// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true },
//     description: { type: String, required: true },
//     category: { type: [String], required: true }, // Array of categories
//     type: { type: [String], required: true }, // Array of types (indoor/outdoor)
//     img: { type: [String], required: true }, // Array of image URLs
//     slug: { type: String, required: true, unique: true },
//     colors: { type: [String], default: [] }, // Array of color options
//     designs: { type: [String], default: [] } // Array of design options
// }, { timestamps: true });

// const Product = mongoose.model("Products", productSchema);

// module.exports = Product;



const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sizes: [{
        size: { type: String, required: true },
        price: { type: Number, required: true }
    }],
    designs: [{ type: String }],
    colors: [{ type: String }],
    additionalOptions: [{
        name: { type: String, required: true },
        price: { type: Number, required: true }
    }]
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: [String], required: true },
    type: { type: [String], required: true },
    img: { type: [String], required: true },
    slug: { type: String, required: true, unique: true },
    variants: [variantSchema]
}, { timestamps: true });

const Product = mongoose.model("Products", productSchema);

module.exports = Product;