const mongoose = require("mongoose")
const Schema = mongoose.Schema;



const orderdetails  = new Schema({
   customer_id:{type:String},
   product_id:{type:String},
   product_name:{type:String},
  quantity:{type:Number}
  
})

const orders = mongoose.model("data",orderdetails)


module.exports = orders