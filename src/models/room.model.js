const {connection} = require('../configs/db')

const Room = {
    getAllRooms:function(callback) {
        return connection.query("CALL GetAllRooms()", callback);
    },
    getRoomById:function(rnumber, callback) {
        return connection.query("CALL GetRoomById(?)", [rnumber], callback);
    }
}

module.exports = Room;