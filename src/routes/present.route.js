const express = require('express');
const router = express.Router();
const presentCT = require('../controllers/present.controller')

router.route('/gift')
    .get(presentCT.getGift)
    
module.exports = router;