const {connection} = require('../configs/db')

const film = {
    getAllFilm:function(callback) {
        return connection.query("CALL GetAllMovies()", callback);
    },
    getMovieByIds:function(id, callback) {
        return connection.query("CALL GetMovieById(?)", [id], callback);
    },
    getMovieSortByReview:function(callback) {
        return connection.query("CALL rating()", callback)
    },
    getMovieSortByMostSold:function(callback) {
        return connection.query("CALL mostSold()", callback)
    }
}

module.exports = film;