const Customers = require('../models/customers-model')

createCustomer = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide customer details',
        })
    }

    const customer = new Customers(body)

    if (!customer) {
        return res.status(400).json({ success: false, error: err })
    }

    customer
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: customer._id,
                message: 'Customer created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Customer not created!',
            })
        })
}

updateCustomer = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Customers.findOne({ username: req.params.username }, (err, customer) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Customer not found!',
            })
        }
        customer.username = body.username
        customer.password = body.password
        customer.first_name = body.first_name
        customer.last_name = body.last_name
        customer.postal_code = body.postal_code
        customer
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    username: customer._username,
                    message: 'Customer updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Customer not updated!',
                })
            })
    })
}

deleteCustomer = async (req, res) => {
    await Customers.findOneAndDelete({ username: req.params.username }, (err, customer) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!customer) {
            return res
                .status(404)
                .json({ success: false, error: `Customer not found` })
        }

        return res.status(200).json({ success: true, data: customer })
    }).catch(err => console.log(err))
}

authenticateCustomer = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    // const customer = new Customers(body)
    // customer.username = body.username
    // customer.password = body.password

    Customers.findOne({ username: body.username }, (err, customer) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Customer not found!',
            })
        }

        if (customer.password == body.password) {
            return res.status(200).json({
                    success: true,
                    username: customer._username,
                    message: 'Customer authenticated!',
            })
        } else {
            return res.status(404).json({
                success: true,
                message: 'Password incorrect!',
            })
        }
    })
}


module.exports = {
    createCustomer,
    updateCustomer,
    deleteCustomer,
    authenticateCustomer
}