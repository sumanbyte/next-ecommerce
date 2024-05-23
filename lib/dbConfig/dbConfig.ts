import mongoose from "mongoose";

export async function connect(){
    try{
       await mongoose.connect(process.env.DATABASE_URL!)
        console.log("Connected to mongodb successfully")
    }catch(error:any){ 
        console.log("error establishing database connection");
        console.log(error)
    }   
}