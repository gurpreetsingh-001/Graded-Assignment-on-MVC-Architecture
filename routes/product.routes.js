const express =require('express');
const jwtHandler= require('../utils/jwthandler')
const {productAdd,productUpdateId, productFilter,ProductViewAll} =require('../controllers/product.controller')

// creating cusotm route;
const productRoute =express.Router();

productRoute.post('/new',jwtHandler,productAdd);
productRoute.post('/update/:id',productUpdateId);
productRoute.post('/filter',productFilter);
productRoute.get('/getAllProduct',ProductViewAll);








module.exports =productRoute;