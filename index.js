const mongoose = require("mongoose");
const express = require("express")
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/api_web_tech_assignment").then(()=>console.log("Connected to db"))


app.use(express.json());
const productdata = require("./routers/Product")
const customerdetails = require("./routers/Customer")
const order = require("./routers/order")

app.use(productdata)
app.use(customerdetails)
app.use(order)


app.listen(8081,()=>console.log("connected to Sucessfully"))