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
        type:Boolean,
        required:true,
        default:false
    }
},
{
    timestamps: true,
}
);

const user = mongoose.model('user',UserSchema)
module.exports = user;