const {connection} = require('../configs/db')

const review = {
    createReview:function(cid, id, t_tid, t_id, t_rnumber, t_movietime, epoint, callback) {
        return connection.query("CALL CreateReview(?,?,?,?,?,?,?)", [cid, id, t_tid, t_id, t_rnumber, t_movietime, epoint], callback);
    }
}

module.exports = review;