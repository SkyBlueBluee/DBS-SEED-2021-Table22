const Order = require('../models/order-model')

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

getOrderByCustomer = async (req, res) => {

    await Order.find({ customer_id: req.params.customer_id }, (err, order) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!order || order.length == 0) {
            return res
                .status(404)
                .json({ success: false, error: `No orders found for customer ID ${req.params.customerId}` })
        }
        return res.status(200).json({ success: true, data: order })
    }).catch(err => console.log(err))
}

module.exports = {
    createOrder,
    getOrderByCustomer
}