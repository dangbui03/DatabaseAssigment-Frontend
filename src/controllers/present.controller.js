const gift = require('../models/present.model')

const getGift = function(req, res, next) {
    if(req.query.item) {
        gift.getGifts(req.query.item, function(err, rows) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(rows);
            }
        })
    }
}

module.exports = { 
    getGift
}