const room = require('../models/room.model');

const getAllRoom = function(req, res, next) {
    {
        room.getAllRooms(function(err, rows) {
            if(err){
                res.status(500).json(err);
            }
            else {
                res.json(rows);
            }
        })
    }
}

const getRoomByIds = function (req, res, next) {
    if(req.query.rnumber){
        room.getRoomById(req.query.rnumber, function(err, rows) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(rows[0]);
            }
        });
    } else {
        res.status(500).json({ message: "INTERNAL SERVER ERROR"});
    }
}

module.exports = {
    getAllRoom,
    getRoomByIds
}