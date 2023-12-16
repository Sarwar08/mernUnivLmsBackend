import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        author:{
            type: String,
            required: true
        },
        publishYear:{
            type: Number,
            required: true
        }, 
        quantity:{
            type: Number,
            required: true,
        },
        available:{
            type: Number,
            required: true,
        },
        borrowed:{
            type: Number,
            default: 0, // initializes with 0, updates later
        }
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('books', bookSchema);

