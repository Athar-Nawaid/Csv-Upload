import mongoose from "mongoose";


let connectToMongoose = async()=>{
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to DB via mongoose')
}

export default connectToMongoose;