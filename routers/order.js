const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const orders = require("../models/order")
const Product = require("../models/Product")
const Customer = require("../models/Customer")

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

router.post("/stock/:available_quentity",async(req,res)=>{
    try{
        const quantity = req.body
        const  stock = await Product.find({_available_quentity:req.params.available_quentity})

        const ord = await orders.create(req.body)

        if(ord>stock){
            return res.json("out of Stock")
        }else
        {
            return res.json("order Sucessfully")
        }
    }catch(e){
        res.json({message:e.message})
    }
})

router.get("/balancedetails/:balance",async(req,res)=>{
    try{
        const  bal = await Customer.find({_balance:req.params.balance})

        if(bal<100){
            return res.json("insufficient balance")
        }else{
            return res.json("your balance is good")
        }
    }catch(e){
        res.json({message:e.message})
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