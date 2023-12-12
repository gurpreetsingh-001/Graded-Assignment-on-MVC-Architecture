const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
//require('dotenv').config({ path: '.env' });

const app = express();
const Port = 5000;
app.use(cors());

app.use(express.json());
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
    }
}

connectDb();


// Problem statement for E-commerce(Flipkart);
// Product , Userdetail, Orders, comments;



//user , message

const UserRoute =require('./routes/user.routes');
const productRoute = require('./routes/product.routes');
const commentRoute =  require('./routes/comment.routes');

//in order to user any kind of custom route or any external middleware 
// we use app.use() : loader method
// /user/register
app.use('/user',UserRoute);
app.use('/product',productRoute);
app.use('/comment',commentRoute);


app.use('*',(req,res,next)=>{
    const error =new Error('The route does not exists.')
    next(error);
   })
   const errorHandler= require('./utils/errorHandler')
   app.use(errorHandler);
   // API endpoint to update your comment using userID for the same product;***************
   //updateOne();






//User model : register and login : inserting new document;



//authentication :validate if user exists in the db or not;
//  Authorisation : token :
// reading operation


// api endpoint to update the username of user based on userid;
// update operation , passing info using params 


// Methods of Mongoose;
// save(),create() ,findOne(),find(),findbyIdandUpdate();
// take info from body and params of request object;


//Adding new product


// update the product detail;


// Make endpoint to filter the data  of product based on price;
// see product price less than equal to 35000; GET 
// see product price less than equal to what user is providing the price;
// how to work with req.query
//www.google.com/gmail?category=1000
//$lte : less than equal to 
//$gte: greater than equal to
//$eq: eual to

//minPrice and maxPrice 


// Make Api endpoint to delete the product by ID ********************

// api endpoints for creating comments : 


// API endpoint to get all comments;


// API endpoint to update your comment using userID for the same product;***************
//updateOne();
app.listen(Port, () => {
    console.log(`server is working on Port ${Port}`)
})



//Model,view and controller structure;
//MVCR : Routes 

//Model : schema and model definintion of db;
//Controller : callback function which handles req and res object for apartivular
// api endpoint.
//view : rendering html templates or Ui templates from your server.

// Main Pointer :
//  Modularity and folder structure for more readable codes.
// Error handling becomes easy.
// Avoid repeated codes.
// Clear separation
// Easy to maintain and upgrade in future.

//  client --API ---server
//          http://localhost:5000/getinfo