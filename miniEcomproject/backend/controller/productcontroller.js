
const productModel=require('../models/productModel');
exports.getProducts=async(req, res, next) =>  {
//    Get product API- /api/v1/products
const query=req.query.keyword?{name:{
    $regex:req.query.keyword,
    $options: 'i'
}}:{}
   const products=await productModel.find(query);
    res.json({
        success:true,
        products
    })
}

//    Get Singe product API- /api/v1/products/:id
exports.getSingeProducts=async(req, res, next) =>  
    {
    try{
        const product=await productModel.findById(req.params.id);
        res.json({
            success:true,
            product
        })

    }catch(error)
    {
        res.status(404).json({
            success:false,
            message:'unabe to get prouct with that id'
    })
    }
     
    
   
}