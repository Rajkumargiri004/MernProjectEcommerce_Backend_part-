// import product schema from models
const allproducts = require('../model/Product');




//  create products --Admingetsingle
exports.createProduct = async (req,res,next)=>{
    const productdemo = await allproducts.create(req.body);
    res.status(201).json({
        success:true,
        productdemo
    })
}

// get all product --Admin

exports.getAllproduct = async (req,res)=>{
    const responceproduct = await allproducts.find()
    res.status(200).json({
      success: true,
      responceproduct
    })
    
}

// update product ---Admin

exports.updateproduct = async(req,res)=>{
    let product = await allproducts.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
    }
    else{
        product = await allproducts.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: false,
            useFindAndModify: false
        });

    }
    res.status(200).json({
        success: true,
        product

    })
}
// Delete product ---Admin

exports.DeleteProduct = async(req,res)=>{
    const delproduct = await allproducts.findById(req.params.id)

    if(!delproduct){
        return res.status(500).json({
            message: "product not found"
        })
    }
    else{
        await delproduct.remove()
        res.status(200).json({
            message: "product delete sucessfully"
        })
    }
}

// Get single product

exports.getsingleproduct = async(req,res)=>{
    const singleprod = await allproducts.findById(req.params.id);
    if(!singleprod){
       return res.status(500).json({
        sucess: false,
        message: "product not found"
        })
    }
    
    res.status(200).json({
        success: true,
        singleprod

    })
}
