const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
    {
        customer_id: { type: Number, required: true },
        order_details: [{
            title: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
            description: { type: String, required: true },
            image: { type: String, required: true }
        }],
        total_price: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('order', Order)