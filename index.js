const express = require('express');
const app = express();


require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// import routes
const todoroutes = require('./routes/todos');

// mount todo routes
app.use('/api/v1', todoroutes);

// start server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

// connect to database
const dbconnect = require('./config/database');
dbconnect();

// default routes
app.get('/',(req,res)=>{
    res.send("Welcome");
})