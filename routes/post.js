const express = require('express');
const postControllers= require('../controllers/post');
const expr = require('express');
const route = expr.Router();

route.get('/',postControllers.response)
route.post('/new',postControllers.createPost)
// exports.response= (req,res)=> res.send('Hello there from Node Js')
module.exports= route;/*This router will do the work with express automatically and automatically handle the work it send to the other file */