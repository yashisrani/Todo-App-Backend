const Todo = require('../models/Todo');

const createTodo = async(req,res)=>{
    try{
        // fetching data from req using destructuring
        const {title, description} = req.body;

        // creating a new todo and insert in db
        const response = await Todo.create({title:title, description:description});

        // send a success response using json
        res.status(201).json({
            success : true,
            message : "entry created successfully"
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : "Error creating entry"
        })

        
    }
}

module.exports = createTodo;