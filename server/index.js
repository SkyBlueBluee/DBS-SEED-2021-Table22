const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const cartRouter = require('./routes/cart-router')
const categoriesRouter = require('./routes/categories-router')
const customerRouter = require('./routes/customers-router')
const orderRouter = require('./routes/order-router')
const productRouter = require('./routes/product-router')


const app = express()
const apiPort = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', cartRouter)
app.use('/api', categoriesRouter)
app.use('/api', customerRouter)
app.use('/api', orderRouter)
app.use('/api', productRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))