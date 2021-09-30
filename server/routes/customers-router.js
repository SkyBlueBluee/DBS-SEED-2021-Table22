const express = require('express')

const CustomerCtrl = require('../controllers/customers-ctrl')

const router = express.Router()

router.post('/customers', CustomerCtrl.createCustomer)
router.put('/customers/:username', CustomerCtrl.updateCustomer)
router.delete('/customers/:username', CustomerCtrl.deleteCustomer)
router.post('/authenticateCustomer', CustomerCtrl.authenticateCustomer)

module.exports = router