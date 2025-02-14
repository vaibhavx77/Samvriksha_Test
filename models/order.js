const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
      quantity: { type: Number, required: true },
      selectedColor: { type: String },
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled' ], default: 'pending' },
  contactDetails: {
    name: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
  },
  orderDate: { type: Date, default: Date.now }, // Stores the order date
  paymentId: { type: String }, // Razorpay Payment ID
  paymentStatus: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' }, // Payment status
}, { timestamps: true });

const OrderModel = mongoose.model('Orders', OrderSchema);
module.exports = OrderModel;

