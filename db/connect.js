const mongoose= require('mongoose')

uri="mongodb+srv://krishkakadiya102:IZgSNpDYChJ9eAH5@cluster0.k1f0mux.mongodb.net/cluster0?retryWrites=true&w=majority";

// IZgSNpDYChJ9eAH5

const connectDB= () =>{
    console.log('connect');
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports=connectDB;