const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
   type: {
    type: String,
    enum: ["BUY", "SELL"],
    required: true,
  },
});

module.exports =  OrdersSchema ;
