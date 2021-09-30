const Cart = require('../models/cart-model')

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
                message: 'Cart item created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Cart item not created!',
            })
        })
}

updateCartQuantity = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide cart details',
        })
    }

    Cart.findOne({ customerId: req.params.customerId, productId: req.params.productId}, (err, cart) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Item not found in cart',
            })
        }
        cart.quantity = body.quantity

        stock
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: stock._id,
                    message: 'Cart updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Cart not updated',
                })
            })
    })
}

deleteItemFromCart = async (req, res) => {
    await Cart.findOneAndDelete({ customerId: req.params.customerId, productId: req.params.productId}, (err, cart) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!cart) {
            return res
                .status(404)
                .json({ success: false, error: `Unable to find item in cart to delete` })
        }

        return res.status(200).json({ success: true, data: Cart })
    }).catch(err => console.log(err))
}

getCartByCustomer = async (req, res) => {
    await Cart.findOne({ symbol: req.params.customerId }, (err, cart) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!cart) {
            return res
                .status(404)
                .json({ success: false, error: `No items found in cart for ID ${req.params.customerId}` })
        }
        return res.status(200).json({ success: true, data: cart })
    }).catch(err => console.log(err))
}

module.exports = {
    createCart,
    updateCartQuantity,
    deleteItemFromCart,
    getCartByCustomer
}