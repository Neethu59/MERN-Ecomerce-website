const Product = require("./Productschema")


const getall=async(req,res)=>{
    const getalluser=await Product.find()
    res.json(getalluser)
}
module.exports=getall