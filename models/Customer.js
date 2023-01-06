const mongoose = require("mongoose")
const Schema = mongoose.Schema;



const CustomerDetails  = new Schema({
   customer_id:{type:String},
   email:{type:String},
   customer_name:{type:String},
   balance:{type:Number}
  
})

const Customer = mongoose.model("Customerdata",CustomerDetails)


module.exports = Customer