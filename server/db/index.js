const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://shaunchee:shaunchee1996@test.6igod.mongodb.net/test', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db