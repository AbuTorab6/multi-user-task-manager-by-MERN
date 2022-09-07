var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema(
    {
        title:{type:String},
        description:{type:String},
        status:{type:String},
        email:{type:String},
        createdDate : {type:Date, default:Date.now()}
    },
    {
        versionKey:false
    }
)

var taskModel = mongoose.model('task',taskSchema);

module.exports = taskModel;