import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    id:{
        type:Number,
        default:"0",
    },
    title: String,

    price: {
        type:Number,
        default: "0",
    },
    category: String,
    image: String,
    
});
const Book = mongoose.model("Book", bookSchema);

export default Book;