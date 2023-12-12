const express =require('express');
const {RegisterUser,LoginUser,findByID} =require('../controllers/user.controllers')

// creating cusotm route;
const UserRoute =express.Router();

UserRoute.post('/register',RegisterUser);
UserRoute.post('/login',LoginUser);
UserRoute.post('/:id',findByID);


module.exports =UserRoute;