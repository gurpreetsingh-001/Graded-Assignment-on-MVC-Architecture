const express =require('express');
const {commentCreate,commentRead} =require('../controllers/comment.controller')

// creating cusotm route;
const commentRoute =express.Router();

commentRoute.post('/create',commentCreate);
commentRoute.post('/read',commentRead);







module.exports =commentRoute;