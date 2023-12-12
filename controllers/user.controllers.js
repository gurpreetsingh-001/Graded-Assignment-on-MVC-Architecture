const UserModel =require('../models/userSchema.model');
const bcryptPassword = require('../utils/bcryptPassword')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const RegisterUser =async (req, res) => {
    // registration logic 
    try {
        const { email, password, username } = req.body;
        const hashedPassword = await bcryptPassword(password)
        console.log(hashedPassword);
        const insertedData = await UserModel.create({
            email,
            password: hashedPassword,
            username
        })

        res.json({
            message: "data inserted successfully",
            insertedData
        })


    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message
        })
    }

}

const LoginUser=async (req, res) => {
    // login logic
    // step 1 : take all the credential from req.body from the user.
    // Step 2 : use email , to check if that user with this email is there in db;
    // step 3 : if user is there , check his password if it matching with the stored password;;
    // step 4 : if email is there and password also matches : user is logged in.
    // Step 5 : if user is not there; "no user found !","Please register with us"
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        return res.json({
            message: "Please enter all your credentails"
        })
    }

    const ifUser = await UserModel.findOne({ email: email });

    if (!ifUser) {
        return res.json({
            message: `User with this ${email} is not found !`
        })
    }

    // if (ifUser.password == password) {
    //     return res.json({
    //         message: `User with ${email} has been logged in`
    //     })
    // }
    const ismatchedPassword = await bcrypt.compare(password, ifUser.password);
    if (ismatchedPassword) {
        
      const token=  jwt.sign({
            data: ifUser._id
          }, process.env.JWT_SECRETKEY, { expiresIn: '1h' });

      return  res.json({
            message: `User is loggedin`,
            token
        })
    }
    res.json({
        message: `User is not able to login due to wrong password`
    })


    
}
const findByID = async (req, res) => {
    // req.params
    const { id } = req.params;
    const { username } = req.body;

    //update operation of mongoose;
    const updatedDoc = await UserModel.findByIdAndUpdate(id, { username: username }, { new: true });

    res.json({
        message: "Document updated",
        updatedDoc
    })

}


module.exports={
    LoginUser,
    RegisterUser,
    findByID
};