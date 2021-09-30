const Order = require('../models/stock-model')
const Apple = require('../models/apple-model')
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

    if (!stock) {
        return res.status(400).json({ success: false, error: err })
    }

    stock
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: stock._id,
                message: 'Stock created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Stock not created!',
            })
        })
}

createAppleStock = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a stock',
        })
    }

    const apple = new Apple(body)

    if (!apple) {
        return res.status(400).json({ success: false, error: err })
    }

    apple
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: apple._id,
                message: 'Stock created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Stock not created!',
            })
        })
}

updateStock = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
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

function validateProduct(product){

    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
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