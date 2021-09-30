const express = require('express')

const OrderCtrl = require('../controllers/order-ctrl')

const router = express.Router()

router.post('/order', OrderCtrl.createOrder)
// router.put('/customers/:username', OrderCtrl.updateCustomer)
// router.delete('/customers/:username', OrderCtrl.deleteCustomer)
router.get('/customers/:customer_id', OrderCtrl.getOrderByCustomer)

module.exports = router