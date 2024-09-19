const Todo = require('../models/Todo')

const gettodo = async (req,res)=>{
    try{
        // fetching all todos
        const todos = await Todo.find({});

        // send a success response using json
        res.status(200).json({
            success: true,
            data: todos
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error fetching todos"
        })
        
    }
}

const gettodobyid = async (req,res)=>{
    try{
        // fetching todo id from request parame
     const id  = req.params.id;
     const todo = await Todo.findById({_id: id});

     // data for given id not found
     if(!todo){
       return res.status(404).json({
            success: false,
            message: "Todo not found"
        })
     }

     // data for given id found
        res.status(200).json({
            success:true,
            data: todo
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error fetching todo by id"
        })
        
    }
}

module.exports = gettodo, gettodobyid;


// 66e85d3dcf6a1cd535959402