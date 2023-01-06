const mongoose = require("mongoose")
const Schema = mongoose.Schema;



const ProductDetails  = new Schema({
    product_type:{type:String},
    product_name:{type:String},
    product_id:{type:String},
    product_price:{type:Number},
    available_quantity:{type:Number}
})

const Product = mongoose.model("productdata",ProductDetails)


module.exports = Product