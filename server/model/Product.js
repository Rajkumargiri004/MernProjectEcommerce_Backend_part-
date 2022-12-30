const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trin: true
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  reviews:[
    {
        name:{
            type: String,
            required:true,

        },
        rating:{
            type: Number,
            required: true,

        },
        comment:{
            type: String,
            required: true

        }
    }
  ],

  price: {
    type: Number,
    required: [true, "please Enter product Price"],
    maxLength:[8, "price cannot excedd 8 charcter"]
  },
  category: {
    type: String,
    required: [true, "please enter prodcut catergory"],
  },
  Stock:{
    type: Number,
    required: [true,"please inter product stoclk"],
    maxLength:[4,"stock cantno excedd 4 charchter"]
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);


