const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    produit_id :{
        type: String,
        required: true
    }
});

const produits = mongoose.model('dbproduits', ProductSchema);
module.exports=produits;