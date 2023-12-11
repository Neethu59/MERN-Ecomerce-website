const Product = require("./Productschema");


const Productuser=async(req,res)=>{
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
    const Userdetails=await Product.create({
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
    res.json(Userdetails)
}


module.exports= Productuser