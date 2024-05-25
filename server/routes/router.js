import userdb from "../models/userSchema.js"
import express from 'express'
const router = express.Router();

//for user registration

router.post('/register', async(req,res)=>{
   const {fname,email,password,cpassword} = req.body;

   if(!fname || !email || !password || !cpassword){
    res.status(422).json({error:"Fill all the details correctly"})
    
   }

   try {
    
    const preuser = await userdb.findOne({email:email})

    if(preuser){
        res.status(422).json({error:"This Email is Already In Use"})
    }else if(password !== cpassword){
        res.status(422).json({error:"Password and Confirmed Password is not Matched"})
    }else{
        const finalUser = new userdb({
            fname,email,password,cpassword
        })

        //password hasing

        const storeData = await finalUser.save();

        // console.log(storeData);
        res.status(201).json({status:201,storeData})   

    }

   } catch (error) {
    res.status(422).json({error:"Error"})   
   }
});



//User Login

router.post('/login', async(req,res) =>{
    console.log(req.body);
})
export default router;