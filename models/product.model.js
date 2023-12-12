const mongoose =require('mongoose')
const { Schema } = mongoose;
const ProductSchema = new Schema({
    productname: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    productdetails: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true,
        default: 10
    },
    productImage: {
        type: String
    },
    // discount 
    rating: {
        type: String,

    },
    


},{
    timestamps:true
})

const ProductModel = mongoose.model('FlipkarProducts', ProductSchema);

module.exports=ProductModel;