const {connection} = require('../configs/db')

const present = {
    getGifts:function(item, callback) {
        return connection.query("SELECT gift(?) AS result", [item], callback);
    }
}

module.exports = present;