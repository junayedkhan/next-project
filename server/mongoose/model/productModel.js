const mongoose = require("mongoose")

const product_schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    dec: {
        type: String,
        trim: true
    },
    brand: {
        type: String,
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.models.productModel || mongoose.model('productModel', product_schema);