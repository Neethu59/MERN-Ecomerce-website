const Product = require("./Productschema");


const deleteprod= async(req,res)=>{
 const   deleteid=req.params.id;
 const Remove=await Product.findByIdAndRemove({_id:deleteid});
 res.json("Removed")

}
module.exports=deleteprod