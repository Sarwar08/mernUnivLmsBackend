import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

// Middleware for parsing request body
app.use(express.json());

// middleware for handling CORS policy
app.use(cors());


app.get('/', (request, response)=>{
    console.log(request);
    return response.status(302).send("Welcome to tut");
});



mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App is connected to DB");
        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })

app.use('/books', booksRoute);