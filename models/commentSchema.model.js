const mongoose =require('mongoose')
const { Schema } = mongoose;
const commentSchema =new Schema({
    commentMsg:{
        type:String,
        required:true
    },
    userId:{
        //referencing
        type:mongoose.Schema.Types.ObjectId,
        ref:'FlipkarUsers',
        required:true

    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'FlipkarProducts',
        required:true
    }
})

const commentModel = mongoose.model('flipkartComments',commentSchema);
module.exports=commentModel;