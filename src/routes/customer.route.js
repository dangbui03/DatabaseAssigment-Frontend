const express = require('express');
const router = express.Router();
const customerCT = require('../controllers/customer.controller')

router.route('/customers')
    .get(customerCT.getAllCustomer)

router.route('/customer')
    .get(customerCT.getCustomers)
    
module.exports = router;