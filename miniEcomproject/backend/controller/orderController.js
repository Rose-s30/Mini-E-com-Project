const orderModel=require('../models/orderModel');
const productModel=require('../models/productModel');

exports.createOrder=async(req, res, next) =>  {
// Create order: /api/v1/order
    const cardItems=req.body;
    const amount=Number(cardItems.reduce((acc,item) =>(acc + item.product.price * item.qty),0)).toFixed(2);
    const status='pending';
    const order= await orderModel.create({cardItems,amount, status});

    // update stock
    cardItems.forEach(async (item) =>{
      const product=await productModel.findById(item.product._id);
      product.stock=product.stock-item.qty;
      await product.save();
    })
        
    

     
    // console.log(req.body,'DATA')
    // console.log(amount,'Amount')
    res.json({
        success:true,
        order
    })
}