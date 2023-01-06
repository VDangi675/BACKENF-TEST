const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const Product = require("../models/Product")

const router = express.Router()


router.get("/product/:id", async (req, res) => {
try{

    const product = await Product.find({_id:req.params.id});
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

router.get("/product",async(req,res)=>{
    try{
        const data = await Product.find();
        res.status(200).json({
            data
        })
    }catch(e){
        res.json({message:e.message})
    }
})


router.get("/product/:product_type", async (req, res) => {
    try{
    
        const product = await Product.find({_product_type:req.params.product_type});
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


router.post("/product",  async (req, res) => {
   
    try{
     
      const Productdata = await Product.create(req.body)
      res.json({Productdata, ok:"send"})

    } catch (e) {
      res.json({error: e.message })
  }
  });

  router.put("/productName/:product_id",async(req,res)=>{
    try{
      const updatedetails = await Product.updateOne({_product_id:req.params.product_id},req.body)
      res.status(200).json({
        status:"Updated",
        updatedetails
      })
    }catch(e){
        res.json({message:e.message})
    }
  })

  module.exports =router