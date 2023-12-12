const commentModel =require('../models/commentSchema.model');

const commentCreate =async(req,res)=>{
    //comment msg, userid,productid;
   try {
    const {commentMsg,userId,productId} =req.body;

    const createdComment = await commentModel.create({
        commentMsg,userId,productId
    })

    res.status(200).json({
        message:"Comments created.",
        createdComment
    })
   } catch (error) {
    console.log(error.message,"from comment api");
    res.status(404).json({
        message:error.message
    })
   }
}
const commentRead = async(req,res)=>{
    try {
        const allComments = await commentModel.find().populate('userId').populate('productId');
        res.status(200).json({
            message:"all documents",
            allComments
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message:error.message
        })
    }
}
module.exports = {
    commentCreate,
    commentRead
}