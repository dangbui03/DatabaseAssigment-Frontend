const review = require('../models/review.model');

const createReviews = function(req, res, next) {
    const {cid, id, t_tid, t_id, t_rnumber, t_movietime, epoint} = req.body;
    if (cid && id && t_tid && t_id && t_rnumber && t_movietime && epoint) {

        const stringWithHyphens = t_movietime.replace(/\//g, '-');
        const date = new Date(decodeURIComponent(stringWithHyphens));
        date.setHours((date.getHours() + 7)%24);
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        review.createReview(cid, id, t_tid, t_id, t_rnumber, formattedDate, epoint, function(err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else{
                res.status(200).json({ 
                    message: "SUCCESS CREATED",
                    cid,
                    id,
                    t_tid,
                    t_id,
                    t_rnumber,
                    formattedDate,
                    epoint
                });
            }
        })
    }else {
        res.status(500).json("INTERNAL SERVER ERROR");
    }
}

module.exports = {
    createReviews
}