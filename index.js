import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';

import expressEjsLayouts from 'express-ejs-layouts';
import router from './src/router/router.js';
import connectToMongoose from './config/mongoose.js';

let server = express();

server.use(express.urlencoded({extended:true}));
server.use(express.json());

//Setting up ejs template
server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),'src','views'));
server.use('/css',express.static(path.join(path.resolve(),'src','styles')))


//Middle ware to use Ejs layouts and reuse the navbar
server.use(expressEjsLayouts);

// Router to handle all the requests
server.use('/',router);



server.listen(process.env.PORT,()=>{
    connectToMongoose();
    console.log('Server is listening at 3000');

    
});