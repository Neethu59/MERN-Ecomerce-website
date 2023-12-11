const Product = require("./Productschema");

const Cartproducts=async (req,res)=>{
    const getid=req.params.id;
    const productid=await Product.findById({_id:getid})
    res.json(productid)
}
module.exports=Cartproducts
