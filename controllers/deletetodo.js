const Todo = require('../models/Todo');

const deletetodo = async(req,res)=>{
    try{
        const {id} = req.params;
       await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Todo deleted successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error deleting todo"
        })
        
    }
}

module.exports = deletetodo;