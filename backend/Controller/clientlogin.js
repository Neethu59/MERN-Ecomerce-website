const jwt=require("jsonwebtoken")
const bcrypt=require('bcrypt')
const client = require("./ClientSchema")

const clientlogin=async(req,res)=>{
    const {Email,Password}=req.body
    const Emaildata=await client.findOne({Email})
    
    if(Emaildata&&(await bcrypt.compare(Password,Emaildata.Password)))
    {
        res.json({message:"success",Token:tokengeneration(Emaildata._id)})
    }
    else{
        res.json("Faild")
    }
}
module.exports=clientlogin
const tokengeneration=(id)=>{
 return jwt.sign({id},process.env.key,{expiresIn:"1d"})
}