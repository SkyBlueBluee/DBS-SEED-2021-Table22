const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema(
    {
        customer_id: { type: Number, required: true },
        product_id: {type: String, required: true},
        title: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('cart', Cart)