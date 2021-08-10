const mongoose = require('mongoose')
const Product=require('../models/product.model')


module.exports={
    getAllProducts:async(req, res, next)=>{
        try{const results = await Product.find({},{__v:0});
        res.send(results);
        }catch(error){console.log(error.message)}
    },
    
    findProductByName:async(req, res, next)=>{
        const name = req.params.name;
        try{
            const product= await Product.find(name);
            if (!product){
                throw createError(404,"produit n'existe pas")
            }
            res.send(product);
        }catch(error){console.log(error.message)}
    },

    addNewProduct:async(req, res, next)=>{
        try{
            const product = new Product(req.body);
            const result =await product.save()
            res.send(result)
        }catch(error){console.log(error.message)}
    },
}