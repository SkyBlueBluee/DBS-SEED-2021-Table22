const Cart = require('../models/cart-model')
const Order = require('../models/order-model')
const axios = require('axios')

createOrder = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide order details',
        })
    }

    const order = new Order(body)

    if (!order) {
        return res.status(400).json({ success: false, error: err })
    }

    order
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: order._id,
                message: 'Order created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Order not created',
            })
        })
}

createCart = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide cart details',
        })
    }

    const cart = new Cart(body)

    if (!cart) {
        return res.status(400).json({ success: false, error: err })
    }

    cart
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: cart._id,
                message: 'Cart created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Cart not created!',
            })
        })
}

updateCart = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide cart details',
        })
    }

    Stock.findOne({ symbol: req.params.symbol }, (err, stock) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Stock not found!',
            })
        }
        stock.name = body.name
        stock.symbol = body.symbol
        stock.price = body.price
        stock.units = body.units
        stock
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: stock._id,
                    message: 'Stock updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Stock not updated!',
                })
            })
    })
}

deleteStock = async (req, res) => {
    await Stock.findOneAndDelete({ _id: req.params.id }, (err, stock) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!stock) {
            return res
                .status(404)
                .json({ success: false, error: `Stock not found` })
        }

        return res.status(200).json({ success: true, data: stock })
    }).catch(err => console.log(err))
}

getStockBySymbol = async (req, res) => {
    await Stock.findOne({ symbol: req.params.symbol }, (err, stock) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!stock) {
            return res
                .status(404)
                .json({ success: false, error: `Stock not found` })
        }
        return res.status(200).json({ success: true, data: stock })
    }).catch(err => console.log(err))
}

getStocks = async (req, res) => {
    await Stock.find({}, (err, stocks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!stocks.length) {
            return res
                .status(404)
                .json({ success: false, error: `Stock not found` })
        }
        return res.status(200).json({ success: true, data: stocks })
    }).catch(err => console.log(err))
}

fetchData = async (req, res) => { 

    url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=TUX23KO9I70ZP4Y0"
    apiData = await axios.get(url)
        .then(response => response.data["Time Series (Daily)"])
        .catch(err => console.log(err))

    return res.status(200).json(apiData)

}

module.exports = {
    createStock,
    updateStock,
    deleteStock,
    getStocks,
    getStockBySymbol,
    fetchData,
    createAppleStock
}