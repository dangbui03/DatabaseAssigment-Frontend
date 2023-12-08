const customer = require('../models/customer.model')

const getAllCustomer = function(req, res, next) {
    customer.getAllCustomer(function(err, rows) {
        if(err){
            res.status(500).json({ message: err.message });
        }
        else {
            res.status(200).json(rows);
        }
    })
}

const getCustomers = function(req, res, next) {
    if(req.query.cid) {
        customer.getCustomer(req.query.cid, function(err, rows) {
            if(err) {
                res.status(500).json({ message: err.message });
            } else {
                res.status(200).json(rows[0]);
            }
        });
    } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR"});
    }
}

module.exports = {
    getAllCustomer,
    getCustomers
}