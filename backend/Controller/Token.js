
const jwt=require("jsonwebtoken");
const admin = require("./UserSchema");

const createtocken=async(req,res)=>{
    const {FirstName,LastName,Age,Place,Email,Password}=req.body;
    const userdata=await admin.findOne({Email,Password});
   if(userdata)
   {
    res.json("Already exist")
   }
   else{
    const userdetails=await admin.create({
       FirstName,LastName,Age,Place,Email,Password
    })

    res.json({
        Id:userdetails._id,
        FirstName:userdetails.FirstName,
        LastName:userdetails.LastName,
        Age:userdetails.Age,
        Place:userdetails.Place,
        Email:userdetails.Email,
        Password:userdetails.Password,
        Token:tokengenerate(userdetails._id)
    })
   }
}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.secretkey,{
        expiresIn:'1d'
    })
}
module.exports=createtocken