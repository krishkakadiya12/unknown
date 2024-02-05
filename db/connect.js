const mongoose= require('mongoose')


const connectDB= async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Add any other options you may need
        });
        console.log('connect');
    }catch(e){
        console.log('error', e);
    }
}

module.exports=connectDB;