const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Products = new Schema(
    {
        id: { type: Number, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        category_id: { type: String, required: true },
        image: { type: String, required: true },
        qty: { type: Number, required: true }
    }
)

module.exports = mongoose.model('products', Products)