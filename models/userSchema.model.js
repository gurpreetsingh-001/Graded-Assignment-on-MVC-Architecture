const mongoose =require('mongoose')
const { Schema } = mongoose;
const UserdetailSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 5,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
        // pattern :including @ : regular expression; .com


    },
    password: {
        type: String,
        required: true,
        //pattern : custom validation ;
        //custom validaton : we want to check whether password length greater than 7;
        validate: {
            validator: function (value) {
                //custom logic 
                return value.length > 7;
            },
            message: "Password should be greater than 7 characters"
        }

    },
    // custom schema ;

})

const UserModel = mongoose.model('FlipkarUsers', UserdetailSchema);

module.exports=UserModel;