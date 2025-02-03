import express from 'express';
import { upload } from '../middleware/fileUpload.middleware.js';
import Controller from '../controller/controller.js';

let router = express.Router();

//Renders Home Page
router.get('/',(req,res)=>{
    Controller.getHomePage(req,res);
})

//Deletes uploaded file from the data base 
router.get('/del/:id',(req,res)=>{
    Controller.deleteFile(req,res);
})

//Renders the csv in table form
router.get('/view/:id',(req,res)=>{
    Controller.viewFile(req,res);
})

//Handles upload of file
router.post('/upload',upload.single('csv-file'),(req,res)=>{
    Controller.saveFile(req,res);
})


export default router;