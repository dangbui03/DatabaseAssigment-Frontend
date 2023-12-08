const {connection} = require('../configs/db')

const customer = {
    getAllCustomer:function(callback) {
        return connection.query("CALL GetAllCustomer()", callback);
    },
    getCustomer:function(cid, callback) {
        return connection.query("CALL GetCustomerById(?)", [cid], callback);
    }
}

module.exports = customer;