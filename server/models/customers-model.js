const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customers = new Schema(
    {
        id: { type: Number, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        postal_code: { type: String, required: true },
        gender: { type: String, required: true },
        created_at: { type: String, required: true }
    }
)

module.exports = mongoose.model('customers', Customers)