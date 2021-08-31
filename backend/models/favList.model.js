const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const FavlistSchema = new Schema({
    item : {
        type : String,
        required:true
    }
});

const Favlist = mongoose.model('Favoritlist', FavlistSchema);
module.exports=Favlist;