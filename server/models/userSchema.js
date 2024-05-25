import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
//we use Validator Pakage to validate the Email before store in DB
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    cpassword:{
        type:String,
        required:true,
        minlength:6
    },
    tokens:[
        {
            token:{
                type:String,
                required: true
            }
        }
    ]
});



// Middleware to hash the password before saving
userSchema.pre('save', async function(next) {
    
    this.password = await bcrypt.hash(this.password,12);
    this.cpassword = await bcrypt.hash(this.password,12);
    
    next()
});

//creating model
const userdb = new mongoose.model("users", userSchema)

export default userdb;