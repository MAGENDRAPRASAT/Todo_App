const mongoose=require('mongoose');

exports.connectDb=async()=>{
    try{
    const conn=await mongoose.connect('mongodb://0.0.0.0:27017/todo');
    console.log("Db connected")
    }
    catch(error){
        console.log(error)
    }

}