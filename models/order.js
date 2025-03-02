// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
//   products: [
//     {
//       product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
//       quantity: { type: Number, required: true },
//       selectedColor: { type: String },
//     }
//   ],
//   totalAmount: { type: Number, required: true },
//   status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled' ], default: 'pending' },
//   contactDetails: {
//     name: { type: String, required: true },
//     contactNo: { type: String, required: true },
//     address: { type: String, required: true },
//     pincode: { type: String, required: true },
//   },
//   orderDate: { type: Date, default: Date.now }, // Stores the order date
//   paymentId: { type: String }, // Razorpay Payment ID
//   paymentStatus: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' }, // Payment status
// }, { timestamps: true });

// const OrderModel = mongoose.model('Orders', OrderSchema);
// module.exports = OrderModel;


const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
      productName: { type: String, required: true }, // Product name at the time of purchase
      quantity: { type: Number, required: true },
      variant: { type: String, required: true }, // Selected variant
      size: { type: String, required: true }, // Selected size
      design: { type: String, default: "" }, // Selected design (if applicable)
      color: { type: String, default: "" }, // Selected color (if applicable)
      additionalOptions: [
        {
          name: { type: String, required: true }, // Additional option name
          price: { type: Number, required: true }, // Additional option price
        },
      ],
      price: { type: Number, required: true }, // Total price for the item (base price + additional options)
    },
  ],
  totalAmount: { type: Number, required: true }, // Total price of the order
  status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' }, // Order status
  contactDetails: {
    name: { type: String, required: true }, // User's name
    contactNo: { type: String, required: true }, // User's contact number
    address: { type: String, required: true }, // User's address
    pincode: { type: String, required: true }, // User's pincode
  },
  orderDate: { type: Date, default: Date.now }, // Stores the order date
  paymentId: { type: String }, // Razorpay Payment ID
  paymentStatus: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' }, // Payment status
}, { timestamps: true });

const OrderModel = mongoose.model('Orders', OrderSchema);
module.exports = OrderModel;
