import express from 'express';
import { upload } from '../middleware/fileUpload.middleware.js';
import Controller from '../controller/controller.js';

let router = express.Router();

router.get('/',(req,res)=>{
    Controller.getHomePage(req,res);
})
router.get('/del/:id',(req,res)=>{
    Controller.deleteFile(req,res);
})

router.get('/view/:id',(req,res)=>{
    Controller.viewFile(req,res);
})

router.post('/upload',upload.single('csv-file'),(req,res)=>{
    Controller.saveFile(req,res);
})


export default router;