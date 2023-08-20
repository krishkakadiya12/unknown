const Products= require('../models/product');

const getAllProducts= async (req, res) =>{

    const {company, name, sort} =req.query;
    const queryObject={};
    if(company){
        queryObject.company= company;
    }

    if(name){
        queryObject.name= name;
    }

    
    let apiData=Products.find(queryObject);
    
    if(sort){
        let sortFix= sort.replace(",", " ")
        apiData= apiData.sort(sortFix);
    }
    console.log(queryObject);
    const myData= await apiData;
    res.status(200).json({myData});
    console.log('SUCCESS');
}

const getAllProductsTesting= async (req, res) =>{

    res.status(200).json({msg : "I am getallproductsTesting"});
}

module.exports= {getAllProducts, getAllProductsTesting};