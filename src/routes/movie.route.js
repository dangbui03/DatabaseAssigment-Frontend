const express = require('express');
const router = express.Router();
const movieCT = require('../controllers/movie.controller')

router.route('/movies')
    .get(movieCT.getAllMovies)
    
router.route('/movie')
    .get(movieCT.getMovieById)

router.route('/movie/sort/withreview')
    .get(movieCT.getMovieSortByReviews)

router.route('/movie/sort/withquantity')
    .get(movieCT.getMovieSortByMostSolds)

module.exports = router;