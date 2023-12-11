
const jwt=require("jsonwebtoken")
const bcrypt=require('bcrypt')
const admin = require("./UserSchema")
const login=async(req,res)=>{
    const {Email,Password}=req.body
    const Emaildata=await admin.findOne({Email})
    
    if(Emaildata&&(await bcrypt.compare(Password,Emaildata.Password)))
    {
        res.json({message:"success",Token:tokengeneration(Emaildata._id)})
    }
    else{
        res.json("Faild")
    }
}
module.exports=login
const tokengeneration=(id)=>{
 return jwt.sign({id},process.env.secretkey,{expiresIn:"1d"})
}