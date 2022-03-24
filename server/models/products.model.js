const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "*Title is required"],
        minlength: [3, "Title must be 3 characters"]
    },
    price : {
        type: Number,
        required: [true, "*Price is required"]
    },
    description : {
        type: String,
        required: [true, "Description is required"]
    }
}, {timestamps : true})

module.exports.product = mongoose.model('product', ProductSchema) 