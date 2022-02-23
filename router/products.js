const express = require('express')
const router = express.Router()

const products = require('../controller/products')

router.get('/list', products.list)

module.exports = router
