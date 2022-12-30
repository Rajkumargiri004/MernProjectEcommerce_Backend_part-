// import product schema from models
const Product = require('../model/Product')


//  create products
exports.createProduct = async (req,res,next)=>{
    const productdemo = await Product.create(req.body);
    res.status(201).json({
        success:true,
        productdemo
    })
}

// get all product

