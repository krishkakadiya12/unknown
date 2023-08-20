const connectDB= require('./db/connect');
const Product= require('./models/product');
const Productjson= require('./products.json');

const start= async()=>{
    try{
        await connectDB("mongodb+srv://krishkakadiya102:IZgSNpDYChJ9eAH5@cluster0.k1f0mux.mongodb.net/cluster0?retryWrites=true&w=majority");
        await Product.deleteMany();
        await Product.create(Productjson);
        console.log('SUCCESS');
    }
    catch(error){
        console.log(error);
    }
}

start();