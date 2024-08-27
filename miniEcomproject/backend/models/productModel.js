const mongoose=require('mongoose')

const productScheme=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[{
        image:String
    }],
    category:String,
    seller:String,
    stock:String,
    numberOfReViews:String,
    createdAt:Date
})

const productModel=mongoose.model('Product',productScheme);
module.exports=productModel;