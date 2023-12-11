const Product = require("./Productschema");

const updateproduct=async(req,res)=>{
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
    const _id=req.params.id
    const productupdate=await Product.findByIdAndUpdate(_id,{product_name,
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
        shipping_details})
    res.json(productupdate)
}
module.exports=updateproduct