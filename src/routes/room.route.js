const express = require('express');
const router = express.Router();
const roomCT = require('../controllers/room.controller')

router.route('/rooms')
    .get(roomCT.getAllRoom)
    
router.route('/room')
    .get(roomCT.getRoomByIds)

module.exports = router;