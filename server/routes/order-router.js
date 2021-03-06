const express = require('express')

const OrderCtrl = require('../controllers/order-ctrl')

const router = express.Router()

router.post('/order', OrderCtrl.createOrder)
router.get('/order/:customer_id', OrderCtrl.getOrderByCustomer)

module.exports = router