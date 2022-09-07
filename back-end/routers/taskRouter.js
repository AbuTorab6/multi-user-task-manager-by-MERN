var express = require('express');
var app = express();

var router = express.Router();
app.use(express.json());
var jwt = require('jsonwebtoken')

var taskModel = require('../models/taskModel');



var createTask = async(req,res)=>
{
    var dataFromPostman = req.body;
    var tokenFromPostman = req.headers.authorization;

    if(tokenFromPostman=='')
    {
        res.status(203);
        res.send("Token is required")
    }
    else
    {
        try
        {
            var dataFromToken = jwt.verify(tokenFromPostman,process.env.KEY);

            var ob = new taskModel(
                {
                    title:dataFromPostman.title,
                    description:dataFromPostman.description,
                    status:dataFromPostman.status,
                    email:dataFromToken.email,
                }
            );
            var data = await ob.save();
            if(data==undefined)
            {
                res.status(400);
                res.send("can not insert the task");
            }
            else
            {
                res.status(200);
                res.send("task is inserted")
            }

        } 
        catch(ob)
        {
            res.status(206);
            res.send(ob.message);
        }
    }
}


var deleteTask = async (req,res)=>
{
    var myId = req.params.id;
    var tokenFromPostman = req.headers.authorization;

    if(tokenFromPostman=='')
    {
        res.status(203);
        res.send("Token is required")
    }
    else
    {
        try
        {
            var dataFromToken = jwt.verify(tokenFromPostman,process.env.KEY);

            var data = await taskModel.deleteOne({_id:myId});

            if(data.deletedCount==0)
            {
                res.status(203);
                res.send("can not delete the task");
            }
            else
            {
                res.status(200);
                res.send("task is deleted")
            }

        } 
        catch(ob)
        {
            res.status(206);
            res.send(ob.message);
        }
    }
}

var updateTaskStatus = async(req,res)=>
{
    var myId = req.params.id;
    var MyStatus = req.params.status;
    var tokenFromPostman = req.headers.authorization;

    if(tokenFromPostman=='')
    {
        res.status(203);
        res.send("Token is required")
    }
    else
    {
        try
        {
            var dataFromToken = jwt.verify(tokenFromPostman,process.env.KEY);

            var data = await taskModel.updateOne({_id:myId},{$set:{status:MyStatus}})
            if(data.modifiedCount==0)
            {
                res.status(203);
                res.send("can not update task's status")
            }
            else
            {
                res.status(200);
                res.send("task status updated")
            }

        } 
        catch(ob)
        {
            res.status(206);
            res.send(ob.message);
        }
    }
    
}


var findByStatus = async(req,res)=>
{
    var MyStatus = req.params.status;
    var tokenFromPostman = req.headers.authorization;

    if(tokenFromPostman=='')
    {
        res.status(203);
        res.send("Token is required")
    }
    else
    {
        try
        {
            var dataFromToken = jwt.verify(tokenFromPostman,process.env.KEY);

            var data = await taskModel.aggregate([
                {$match:{status:{$eq:MyStatus}}},
                {$match:{email:{$eq:dataFromToken.email}}},
                {$project:{
                    _id:1,
                    title:1,
                    description:1,
                    status:1,
                    createdDate:{
                        $dateToString:{
                            date:'$createdDate',
                            format:'%d-%m-%Y'
                        }
                    }
                }}

            ]);

            if(data[0]==undefined)
            {
                res.status(203);
                res.send("cant find any task");
            }
            else
            {
                res.status(200);
                res.send(data);
            }

        } 
        catch(ob)
        {
            res.status(206);
            res.send(ob.message);
        }
    }
}




var countTaskByStatus = async (req,res)=>
{
    var tokenFromPostman = req.headers.authorization;

    if(tokenFromPostman=='')
    {
        res.status(203);
        res.send("Token is required")
    }
    else
    {
        try
        {
            var dataFromToken = jwt.verify(tokenFromPostman,process.env.KEY);

            var data = await taskModel.aggregate([
                {$match:{email:{$eq:dataFromToken.email}}},
                {$group:{_id:'$status',count:{$count:{}}}}
            ])

            if(data[0]==undefined)
            {
                res.status(203);
                res.send("failed to count all task")
            }
            else
            {
                res.status(200);
                res.send(data);
            }
            
            

        } 
        catch(ob)
        {
            res.status(206);
            res.send(ob.message);
        }
    }
}



router.route('/createTask')
    .post(createTask);
router.route('/deleteTask/:id')
    .get(deleteTask);
router.route('/updateTaskStatus/:id/:status')
    .get(updateTaskStatus)
router.route('/findByStatus/:status')
    .get(findByStatus)
router.route('/countTaskByStatus')
    .get(countTaskByStatus)

module.exports=router;