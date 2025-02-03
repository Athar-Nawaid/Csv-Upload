
import { MongoGCPError } from "mongodb";
import mongoose  from "mongoose";


let csvSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
});

let CSVModel = mongoose.model('Csv',csvSchema);


export default CSVModel;

