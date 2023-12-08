const express = require('express');
const router = express.Router();

const movie = require('./movie.route');
const movieScreening = require('./movieScreening.route')
const room = require('./room.route')
const customer = require('./customer.route')
const gift = require('./present.route')
const ticket = require('./ticket.route')
const review = require('./review.route')

router.use('/', [movie, movieScreening, room, customer, gift, ticket, review]);

module.exports = router;