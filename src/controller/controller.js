import Repository from "../Repository/repo.js";
import csvToJson from "../../csvtojson.js";


export default class Controller{

    static async getHomePage(req,res){
        let files = await Repository.getFiles(); 
        res.render('home.ejs',{files:files});
    }

    static async deleteFile(req,res){
        let id = req.params.id;
        let deletedItem = await Repository.deleteFileById(id);
        console.log(deletedItem);
        if(deletedItem.deletedCount>0){
            
            res.redirect('/');
        }else{
            console.log('Could not delete file')
        }
        
    }

    static async viewFile(req,res){
        let id = req.params.id;
        let file = await Repository.getFileById(id);
     
        let arr = await csvToJson(file.name);
        
    
        res.render('viewTable.ejs',{data:arr});
    }

    static async saveFile(req,res){
        let name = req.file.filename;
        let path = './Files/'+req.file.filename;
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        
        let file = await Repository.createFile(name,path,date,time);
        if(!file){
            console.log('err in saving file');
        }else{
            res.redirect('/');
        }
    }
}