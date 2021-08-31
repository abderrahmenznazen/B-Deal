const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    userIdentifient:{
        type:String,
        required:true
    },
    isAdmin:{
        type:String,
        enum : ['user','admin'],
        required:true
    },
    favlists:[{type : mongoose.Schema.Types.ObjectId, ref:'Favoritlist'}]
},
{
    timestamps: true,
}
);

const user = mongoose.model('user',UserSchema)
module.exports = user;