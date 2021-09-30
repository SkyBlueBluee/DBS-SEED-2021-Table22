const express = require('express')

const CartCtrl = require('../controllers/cart-ctrl')

const router = express.Router()

router.post('/cart', CartCtrl.createCart)
router.put('/cart/:customerId/:productId', CartCtrl.updateCartQuantity)
router.delete('/cart/:customerId/:productId', CartCtrl.deleteItemFromCart)
router.get('/cart/:customerId', CartCtrl.getCartByCustomer)

module.exports = router