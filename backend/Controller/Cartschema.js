const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  product_name: { type: String },
  description: { type: String },
  category: { type: String },
  brand: { type: String },
  price: { type: Number },
  discounted_price: { type: Number },
  stock_quantity: { type: Number },
  seller: { type: String },
  rating: { type: Number },
  reviews: [
    {
      user_id: { type: String },
      review_text: { type: String },
      rating: { type: Number },
    }
  ],
  images: [String], // An array of strings for image URLs
  features: {
    type: Map,
    of: String,
  },
  shipping_details: {
    estimated_delivery: { type: String },
    free_shipping: { type: Boolean },
    shipping_cost: { type: Number },
  },
  
});

// Create a model from the schema
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
