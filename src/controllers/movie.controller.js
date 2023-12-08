const movie = require('../models/movie.model');

const getAllMovies = function(req, res, next) {
    {
        movie.getAllFilm(function(err, rows) {
            if(err){
                res.status(500).json(err);
            }
            else {
                res.json(rows);
            }
        })
    }
}

const getMovieById = function (req, res, next) {
    if(req.query.id){
        movie.getMovieByIds(req.query.id, function(err, rows) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(rows[0]);
            }
        });
    } else {
        res.status(500).json("INTERNAL SERVER ERROR");
    }
    
}

const getMovieSortByReviews = function (req, res, next ){
    movie.getMovieSortByReview(function(err, rows) {
        if(err){
            res.status(500).json(err);
        }
        else {
            res.json(rows);
        }
    })
}

const getMovieSortByMostSolds = function (req, res, next ){
    movie.getMovieSortByMostSold(function(err, rows) {
        if(err){
            res.status(500).json(err);
        }
        else {
            res.json(rows);
        }
    })
}

module.exports = {
    getAllMovies,
    getMovieById,
    getMovieSortByReviews,
    getMovieSortByMostSolds
}