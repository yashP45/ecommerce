const express = require('express');

const router = express.Router();
const orderController = require('./../controllers/orderController')
const userController = require('./../controllers/userController');

router.get('/getOrder', orderController.myOrders);
router.post('/createOrder', orderController.newOrder);
// Allowing only admin to see all orders

router.get('/getAllOrder', userController.restrictTo('admin'), orderController.getAllOrders);

module.exports = router 