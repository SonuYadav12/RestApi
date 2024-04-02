require("dotenv").config();
const connectDB=require("./db/connect");
const Product=require("./models/products");

const ProductJson=require("./product.json")

const start=async()=>{
    try{
        connectDB(process.env.MONGODB_URL);
        //deleting the previous data and replacing it all with the new data
        //instead of adding the old data + new data
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success")
    }
    catch(error){
        console.log(error);
    }
};
start();