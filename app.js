require('dotenv').config();
const express= require('express');
const app= express();
const connectDB= require('./db/connect');

const PORT= 5000;
const p_r= require('./routes/product');

app.get('/' , (req, res)=>{
    res.send('hii, i am live');
});

app.use("/api/products", p_r);

const start= async() =>{
    try{
        await connectDB();
        app.listen(PORT , ()=>{
            console.log(`Running on ${PORT}`)
        });
    }catch(error){
        console.log(error);
    }
};

start();