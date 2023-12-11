const Cart = require("./Cartschema")



const getallcart=async(req,res)=>{
    const getalluser=await Cart.find()
    res.json(getalluser)
}
module.exports=getallcart