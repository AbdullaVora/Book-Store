const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dsc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true 
    },
    image:{
        type: String,
        required: true
    }
})

const  Data_model = mongoose.model('Book_Store', dataSchema);

module.exports = Data_model