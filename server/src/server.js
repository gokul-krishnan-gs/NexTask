require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT;

const app = express();

app.use("/api",(req,res)=>{
    res.status(200).json({
        success: true,
        message: "Hello From Server"
    })
});

app.listen(PORT,()=>{
    console.log(`Sever is running @loaclhost:${PORT}`);
});