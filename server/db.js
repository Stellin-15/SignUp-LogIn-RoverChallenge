const mongoose = require("mongoose");

const connectionParams = {
    useNewurlParser:true,
    useUnifiedTopology:true,

};

try{
    mongoose.connect(process.env.DB)
    console.log("connected to database successfully!! Let's goooo...");
}catch(error){
    console.log(error);
    console.log("fuck bro, something went wrong try again!")
}