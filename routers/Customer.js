const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const Customer = require("../models/Customer")

const router = express.Router()


router.get("customer/:id", async (req, res) => {
try{

    const product = await Customer.find({_id:req.params.id});
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


router.post("/customer",  async (req, res) => {
   
    try{
      const Productdata = await Customer.create(req.body)
      res.json({Productdata, ok:"send"})

    } catch (e) {
      res.json({error: e.message })
  }
  });

  module.exports =router