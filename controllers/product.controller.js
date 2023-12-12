const ProductModel = require('../models/product.model');
const UserModel = require('../models/userSchema.model');
const productAdd = async (req, res) => {
    //adding new product
    try {
        const { productname, category, productdetails, price, rating } = req.body;
        const userid=req.userId;
        console.log(userid,"user id coming from req.userId from token");
        const isUser= await UserModel.findById(userid);
        if(isUser)
        {
        const insertedProduct = await ProductModel.create({
            productname,
            category,
            productdetails,
            price,
            rating
        })
   

      return  res.status(200).json({
            message: "Product inserted successfully",
            insertedProduct
        })
    }
    res.status(404).json({
        message:"User does not exists to add the product"
    })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message: error.message
        })
    }

}
 const productUpdateId = async (req, res) => {
    try {
        const userid=req.userId;
        const isUser= await UserModel.findById(userid);
        //details of updating the product
        const { id } = req.params
        const { productdetails, price } = req.body;
        //id : params                                              //unqiue fields
        if(isUser)
        {
        const updatedProduct = await ProductModel.findOneAndUpdate({_id:id}, { productdetails:productdetails,price:price},{new:true})
        return res.status(201).json({
            message: "Product data Updated",
            updatedProduct
        })
    } res.status(404).json({
        message:"User does not exists to add the product"
    })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message: error.message
        })
    }
}


const productFilter = async(req,res)=>{
    try {
       const {minprice,maxprice} =req.query;
       const userid=req.userId;
        const isUser= await UserModel.findById(userid);
       // const filteredProduct =await ProductModel.find({price:{$gte:price}});
       // const filteredProduct =await ProductModel.find({price:{$lte:price}});
       // const filteredProduct =await ProductModel.find({price:{$eq:price}});
       if(isUser)
        {
       const filteredProduct =await ProductModel.find({price:{$gte:minprice,$lte:maxprice}});
       return res.status(200).json({
           filteredProduct
       })}
       res.status(404).json({
        message:"User does not exists to add the product"
    })
    } catch (error) {
       console.log(error.message);
       res.status(404).json({
           message:error.message
       })
    }

}
const ProductViewAll = async (req,res)=>{

  

    try {
        const userid=req.userId;
        const isUser= await UserModel.findById(userid);
        if(isUser)
        {
        const allproducts = await ProductModel.find();

        

        res.json({

            message:"List of All Products",

            allproducts

        })}
        res.status(404).json({
         message:"User does not exists to add the product"
     })

    } catch (error) {

        console.log(error.message)

        res.json({

            message:error.message

        }) 

    }

 

}
module.exports = {
    productAdd,
    productUpdateId,
    productFilter,
    ProductViewAll
};


// index.js-routes-controller-model- dependencies