const mongoose = require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected Successfully");
    }catch(error){
        console.log(error);
        console.log("MongoDB Connection Failed");
        process.exit(1);
    }
}

module.exports = connectDB;