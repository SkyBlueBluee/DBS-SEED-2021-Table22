const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Categories = new Schema(
    {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true }
    }
)

module.exports = mongoose.model('categories', Categories)