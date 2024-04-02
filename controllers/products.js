const Product=require("../models/products")

const getAllProducts=async(req,res)=>{
    const data=await Product.find({})
    res.status(200).json({data});
};

const getAllProductsTesting=async(req,res)=>{
    const myData=await Product.find(req.query);
    res.status(200).json({msg:"I am getAllProductsTesting"});
};

module.exports={getAllProducts,getAllProductsTesting};