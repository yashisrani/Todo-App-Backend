const { response } = require('express');
const Todo = require('../models/Todo');

const updatetodo = async(req,res)=>{
    try{
        const {id} =  req.params;
        const {title, description} = req.body;

       const todo = await Todo.findByIdAndUpdate(
        {_id: id},
        {title, description, updateAt:Date.now()},
       )

       res.status(200).json({
        success: true,
        message: "Todo updated successfully"
       })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error updating todo"
        })
    }
}

module.exports = updatetodo;