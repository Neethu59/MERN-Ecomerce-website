const Cart = require("./Cartschema");



const deletecart= async(req,res)=>{
 const   deleteid=req.params.id;
 const Remove=await Cart.findByIdAndRemove({_id:deleteid});
 res.json("Removed")

}
module.exports=deletecart