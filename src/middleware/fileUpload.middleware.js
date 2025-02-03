import multer from "multer";

let storageConfig = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Files/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})


export const upload = multer({storage:storageConfig});