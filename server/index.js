import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);
const port=8000;
Connection();
app.listen(port,()=> console.log(`server is running sucessfully on Port ${port}`));
