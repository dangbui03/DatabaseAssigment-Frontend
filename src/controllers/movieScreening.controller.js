const { urlencoded } = require('express');
const movieScreening = require('../models/movieScreening.model');

const getAllMovieScreenings = function(req, res, next) {
    {
        movieScreening.getAllMovieScreening(function(err, rows) {
            if(err){
                res.status(500).json(err);
            }
            else{
                res.status(200).json(rows);
            }
        });
    }
}

const createMovieScreenings = function(req, res, next) {
    const {id, rnumber, movietime} = req.body;

    if (id && rnumber && movietime) {
        const stringWithHyphens = movietime.replace(/\//g, '-');
        const date = new Date(decodeURIComponent(stringWithHyphens));
        date.setHours((date.getHours() + 7)%24);
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        movieScreening.createMovieScreening(id, rnumber, formattedDate, function(err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else{
                res.status(200).json({ 
                    message: "SUCCESS CREATED",
                    id,
                    rnumber,
                    formattedDate
                });
            }
        })
    } else {
        res.status(500).json("INTERNAL SERVER ERROR");
    }
}

const updatedMovieScreening = function(req, res, next) {
    const {id, rnumber, movietime, new_id, new_rnumber, new_movietime} = req.body;
    if (id && rnumber && movietime && new_id && new_rnumber && new_movietime) {
        const stringWithHyphens = movietime.replace(/\//g, '-');
        const date = new Date(decodeURIComponent(stringWithHyphens));
        date.setHours((date.getHours() + 7)%24);
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');

        const stringWithHyphens1 = new_movietime.replace(/\//g, '-');
        const date1 = new Date(decodeURIComponent(stringWithHyphens1));
        date.setHours((date1.getHours() + 7)%24);
        const formattedDate1 = date.toISOString().slice(0, 19).replace('T', ' ');
        movieScreening.updatedMovieScreening(id, rnumber, formattedDate, new_id, new_rnumber, formattedDate1, function(err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else{
                res.status(200).json({ 
                    message: "SUCCESS UPDATED",
                    id,
                    rnumber,
                    formattedDate,
                    new_id,
                    new_rnumber,
                    formattedDate1
                });
            }
        })
    } else {
        res.status(500).json("INTERNAL SERVER ERROR");
    }
}

const deleteMovieScreening = function(req, res, next) {

    if(req.query.id && req.query.rnumber && req.query.movietime){
        const stringWithHyphens = req.query.movietime.replace(/\//g, '-');
        const date = new Date(stringWithHyphens);
        date.setHours((date.getHours() + 7)%24);
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        movieScreening.deleteMovieScreening(req.query.id, req.query.rnumber, formattedDate, function(err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else{
                res.status(200).json({ 
                    message: "SUCCESS DELETED"
                });
            }
        })
    } else {
        res.status(500).json("INTERNAL SERVER ERROR");
    }
}

const getMovieScreening = function(req, res, next) {
    if(req.query.id && req.query.rnumber && req.query.movietime) {
        
        const stringWithHyphens = req.query.movietime.replace(/\//g, '-');
        const date = new Date(stringWithHyphens);
        date.setHours((date.getHours() + 7)%24);
        const formattedDate = date.toISOString().slice(0, 19).replace('T', ' ');
        movieScreening.getAMovieScreening(req.query.id, req.query.rnumber, formattedDate, function(err, rows) {
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

const getShowTimes = function(req, res, next) {
    if(req.query.id) {
        movieScreening.getShowTime(req.query.id, function(err, rows) {
            if(err){
                res.status(500).json(err);
            }
            else{
                res.status(200).json(rows[0]);
            }
        });
    } else {
        res.status(500).json("INTERNAL SERVER ERROR");
    }
}


module.exports = {
    getAllMovieScreenings,
    getMovieScreening,
    getShowTimes,
    createMovieScreenings,
    updatedMovieScreening,
    deleteMovieScreening
}