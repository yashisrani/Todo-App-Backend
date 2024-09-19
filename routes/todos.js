const express = require('express');
const router = express.Router();

// import controllers
const createTodo = require('../controllers/createtodo')
const gettodo = require('../controllers/gettodo')
const gettodobyid = require('../controllers/gettodo')
const updatetodo = require('../controllers/updatetodo')
const deletetodo = require('../controllers/deletetodo')

// define API routes
router.post('/createTodo', createTodo);
router.get('/gettodo', gettodo);
router.get('/gettodo/:id', gettodobyid);
router.put('/updatetodo/:id', updatetodo);
router.delete('/deletetodo/:id',deletetodo);

// export your routes
module.exports = router;