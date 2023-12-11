const Cart = require("./Cartschema");



const Cartadd=async(req,res)=>{
    const {product_name,
        description,
        category,
        brand,
        price,
        discounted_price,
        stock_quantity,
        seller,
        rating,
        reviews,
        images,
        features,
        shipping_details,}=req.body;
    const Usercart=await Cart.create({
        product_name,
    description,
    category,
    brand,
    price,
    discounted_price,
    stock_quantity,
    seller,
    rating,
    reviews,
    images,
    features,
    shipping_details,
    })
    res.json(Usercart)
}


module.exports= Cartadd