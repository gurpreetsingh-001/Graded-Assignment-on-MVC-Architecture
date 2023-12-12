const jwt=require('jsonwebtoken');
async function jwtHandler(req,res,next){
//token sent in request headers
const token= req.header('Authorization');
console.log(token,"token here");
if(!token)
{
    return res.status(401).json({
        message:"Unauthorized: No Token Provided"
    })
}

try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY)
    console.log(decoded.data,"from jwt handler");
    req.userId=decoded.data;
    next();
} catch (error) {
    console.log(error.message);
    res.status(404).json({
        message:"Something went wrong with tokens"
    })
}

}

module.exports=jwtHandler;