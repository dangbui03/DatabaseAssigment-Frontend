const ticket = require('../models/ticket.model')

const ticketPriceByAge = function(req, res, next) {
    if(req.query.cid) {
        ticket.ticketPrice(req.query.cid, function(err, rows) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(rows);
            }
        });
    } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR"});
    }
}

const createBuyTicket = function(req, res, next) {
    const {tid, id, rnumber, movietime, cid} = req.body;
    if(tid && id && rnumber && movietime && cid) {
        const stringWithHyphens = movietime.replace(/\//g, '-');
        const date = new Date(decodeURIComponent(stringWithHyphens));
        date.setHours((date.getHours() + 7)%24);
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        ticket.createNewBuyTicket(tid, id, rnumber, formattedDate, cid, function(err, rows) {
            if(err) {
                res.status(500).json(err);
            } else { 
                res.status(200).json({ 
                    message: "SUCCESS CREATED",
                    tid,
                    id,
                    rnumber,
                    formattedDate,
                    cid
                });
            }
        });
    } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR"});
    }
}

const updatePriceTicket = function(req, res, next) {
    const {tid, t_price} = req.body;
    if(tid && t_price) {
        ticket.updatePriceTicket(tid, t_price, function(err, rows) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({ message: `has change price to ${t_price}`});
            }
        });
    } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR"});
    }
}

const ticketGeneration = function(req, res, next) {
    const {id, rnumber, movietime} = req.body;
    console.log(movietime)
    if(id && rnumber && movietime) {

        const stringWithHyphens = movietime.replace(/\//g, '-');
        const date = new Date(decodeURIComponent(stringWithHyphens));
        date.setHours((date.getHours() + 7)%24);
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        ticket.ticketGen(id, rnumber, formattedDate, function(err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else{
                res.status(200).json(rows[0]);
            }
        });
    } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR"});
    }
}

const getAllTicketofMovies = function (req, res, next) {
    if(req.query.id && req.query.rnumber && req.query.movietime) {
        console.log(req.query.movietime)
        const stringWithHyphens = req.query.movietime.replace(/\//g, '-');
        const date = new Date(stringWithHyphens);
        date.setHours((date.getHours() + 7)%24);
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        ticket.getAllTicketofMovie(req.query.id, req.query.rnumber, formattedDate, function(err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else{
                res.status(200).json(rows[0]);
            }
        });
    } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR"});
    }
}

const getTicketByIds = function (req, res, next) {
    ticket.getTicketById(req.query.tid, function(err, rows) {
        if (err) {
            res.status(500).json(err);
        }
        else{
            res.status(200).json(rows[0]);
        }
    });
}

module.exports = {
    ticketPriceByAge,
    ticketGeneration,
    getAllTicketofMovies,
    getTicketByIds,
    updatePriceTicket,
    createBuyTicket
}