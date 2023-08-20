const mongoose= require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    price:{
        type:Number,
        required: [true, "price must be provided"],
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type:Number,
        default:4.9,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum:{
            values: ["apple", "samsung", "dell", "mi"],
            message: `{VALUE} is not supported`,
        },
    },
    image:{
        type: String,
        default:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    },
});

module.exports= mongoose.model("Product", productSchema);