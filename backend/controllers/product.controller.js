const mongoose = require('mongoose')
const Product=require('../models/product.model')


module.exports={
    getAllProducts:async(req, res, next)=>{
        try{const results = await Product.find({},{__v:0});
        res.send(results);
        }catch(error){console.log(error.message)}
    }
}