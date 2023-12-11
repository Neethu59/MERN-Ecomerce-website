const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const admin = require('./UserSchema');
const sinup=async(req,res)=>{
    const {FirstName,LastName,Age,Place,Email,Password}=req.body;
 const useremail=await admin.findOne({Email})
 if(useremail){
    res.json("Already Exist")
 }
 else{
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(Password,salt)
    const customerdetails=await admin.create({FirstName,LastName,Age,Place,Email,Password: hashedpassword})
    res.json({
        Id:customerdetails._id,
       FirstName:customerdetails.FirstName,
       LastName:customerdetails.LastName,
       Age:customerdetails.Age,
       Place:customerdetails.Place,
        Email:customerdetails.Email,
        Password:customerdetails.Password,
        Token:tokengenerate(customerdetails._id)
    })
    
 }
 

}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.secretkey,{
        expiresIn:'1d'
    })
 }
module.exports=sinup