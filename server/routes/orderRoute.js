const express = require('express')
const orderController = require('../controllers/orderController')
const router = express.Router()

router.get('/get', orderController.getOrder)
router.get('/delete', orderController.deleteOrder)
router.get('/get_all', orderController.getAllOrder)
router.get('/new', orderController.newOrder)

module.exports = router;