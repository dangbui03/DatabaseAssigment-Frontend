const {connection} = require('../configs/db')

const movieScreening = {
    getAllMovieScreening:function(callback) {
        return connection.query("CALL GetAllMovieScreening()", callback);
    },
    createMovieScreening:function(id, rnumber, movietime, callback) {
        return connection.query("CALL CreateMovieScreening(?, ?, ?)", [id, rnumber, movietime], callback);
    },
    updatedMovieScreening:function(id, rnumber, movietime, new_id, new_rnumber, new_movietime, callback) {
        return connection.query("CALL UpdateMovieScreening(?,?,?,?,?,?)", [id, rnumber, movietime, new_id, new_rnumber, new_movietime], callback);
    },
    deleteMovieScreening:function(id, rnumber, movietime, callback) {
        console.log(movietime)
        return connection.query("CALL DeleteMovieScreening(?, ?, ?)", [id, rnumber, movietime], callback)
    },
    getAMovieScreening:function(id, rnumber, movietime, callback) {
        return connection.query("CALL getAMovieScreening(?, ?, ?)", [id, rnumber, movietime], callback)
    },
    getShowTime:function(id, callback) {
        return connection.query("CALL set_showtimes(?)", [id], callback);
    }
}

module.exports = movieScreening;