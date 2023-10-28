import express from "express";
import {Book1} from "../models/bookModel1";

const router = express.Router();

router.post('/', async(request, response)=>{
    try{
        if(
            !request.body.title||
            !request.body.author||
            !request.body.publishYear
        ){
            return response.status(400).send({
               message: "Please send all the requied field: title, author, Publish Year"
            });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }

        const book = await Book1.create(newBook);
        response.status(201).send(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get('/', async(request, response)=>{
    try{
        const books = await Book1.find({});
        response.status(200).json({
            count: books.length,
            data: books
        })
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message: error.message});
    }
});

router.get('/:id', async(request, response)=>{
    try{
        const {id} = request.params
        const book = await Book1.findById(id);
        response.status(200).json(book)
    }
    catch(error){
        console.log(message.error)
        response.status(500).send({message: error.message});
    }
});

router.put('/:id', async(request, response)=>{
    try{
        if(
            !request.body.title||
            !request.body.author||
            !request.body.publishYear
        ){
            response.status(400).send({
                message: "Required field missing"
            })
        }
        const {id} = request.params;
        const result = await Book1.findByIdAndUpdate(id, request.body)

        if (!result){
            response.status(404).send("Book not found");
        }else{
            response.status(200).send("Book successfully updated");
        }
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

router.delete('/:id', async(request, response)=>{
    try{
        const {id} = request.params
        const result = await Book1.findByIdAndDelete(id);
        if(!result){
            response.status(404).json({message : "Book not found"})
        }else(
            response.status(201).send({message: "Book successfully deleted"})
        )
    }
    catch(error){
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
});