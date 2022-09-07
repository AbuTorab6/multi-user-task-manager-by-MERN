var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
        firstName :{type:String},
        lastName: {type:String},
        email : {type:String,unique:true},
        mobile : {type:String},
        password : {type:String},
        photo : {type:String},
        createdDate : {type:Date, default:Date.now()}
    },
    {
        versionKey:false
    }
);

var userModel = mongoose.model('user',userSchema);

module.exports = userModel;