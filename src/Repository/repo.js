import CSVModel from "../Schema/csv.schma.js";

export default class Repository{

    static async createFile(name,path,date,time){
        let newFile = new CSVModel({name:name,path:path,date:date,time:time});
        return await newFile.save();
    }

    static async deleteFileById(id){
        return await CSVModel.deleteOne({_id:id})
    }

    static async getFileById(id){
        return await CSVModel.findById(id);
    }
    static async getFiles(){
        return await CSVModel.find();
    }
}