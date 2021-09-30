const express = require('express')

const CategoriesCtrl = require('../controllers/categories-ctrl')

const router = express.Router()

router.get('/categories', CategoriesCtrl.getCategories)

module.exports = router