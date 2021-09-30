const express = require('express')

const CartCtrl = require('../controllers/cart-ctrl')

const router = express.Router()

router.post('/cart', CartCtrl.createCart)
router.put('/cart/:customer_id/:product_id', CartCtrl.updateCartQuantity)
router.delete('/cart/:customer_id/:product_id', CartCtrl.deleteItemFromCart)
router.get('/cart/:customer_id', CartCtrl.getCartByCustomer)

module.exports = router