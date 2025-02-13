const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
      quantity: { type: Number, required: true, min: 1 },
      price: { type: Number, required: true }, // Store price at the time of adding to cart
      selectedColor: { type: String, default: "" }, // Optional color for products that have it
    },
  ],
  totalAmount: { type: Number, default: 0 }, // Total price of the cart
}, { timestamps: true });

// Middleware to auto-calculate totalAmount before saving
CartSchema.pre("save", function (next) {
  this.totalAmount = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  next();
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
