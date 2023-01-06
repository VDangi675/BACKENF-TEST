const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const orders = require("../models/order")
const Product = require("../models/Product")

const router = express.Router()


router.get("/orders/:id", async (req, res) => {
try{

    const product = await orders.find({_id:req.params.id});
    res.status(200).json({
        Status:"Sucess",
        product
    })
}catch(e){
    res.status(500).json({
        status:"Failed",
        message:e.message
    })
}
})

router.get("/stock/:product_name",async(req,res)=>{
    try{
        const  stock = await Product.find({_product_name:req.params.product_name})

        if(stock<10){
            return res.json("out of Stock")
        }
    }
})




router.post("/order",  async (req, res) => {
   
    try{
      const Productdata = await orders.create(req.body)
      res.json({Productdata, ok:"send"})

    } catch (e) {
      res.json({error: e.message })
  }
  });

  module.exports =router