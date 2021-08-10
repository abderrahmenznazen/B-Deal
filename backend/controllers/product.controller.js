const mongoose = require('mongoose')
const Product=require('../models/product.model')


module.exports={
    getAllProducts:async(req, res, next)=>{
        try{const results = await Product.find({},{__v:0});
        res.send(results);
        }catch(error){console.log(error.message)}
    },
    
    findProductById:async(req, res, next)=>{
        const id = req.params.id;
        try{
            const product= await Product.findOne({_id : id });
            if (!product){
                console.log("produit n'existe pas")
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

    updateProduit:async(req, res, next)=>{
        try{
            const id = req.params.id;
            const update =req.body;
            const option ={ new: true };
            const resulta = await Product.findByIdAndUpdate(id, update, option);
            if (!resulta){
                console.log("produit n'existe pas")
            }
            res.send(resulta);
        }catch(error){console.log(error.message)} 
    },
    deleteProduit: async (req, res, next)=>{
        const id = req.params.id;
        try{
            const resulta = await Product.findByIdAndDelete(id);
            if (!resulta){
                console.log("produit n'existe pas")
            }
            res.send(resulta);
        }catch(error){console.log(error.message)}
    }
}