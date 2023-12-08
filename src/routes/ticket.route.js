const express = require('express');
const router = express.Router();
const ticketCT = require('../controllers/ticket.controller')

router.route('/ticket/price')
    .get(ticketCT.ticketPriceByAge)
    .put(ticketCT.updatePriceTicket)
    
router.route('/ticket/buyticket')
    .post(ticketCT.createBuyTicket)

router.route('/ticket/gen')
    .post(ticketCT.ticketGeneration)

router.route('/tickets')
    .get(ticketCT.getAllTicketofMovies)

router.route('/ticket')
    .get(ticketCT.getTicketByIds)

module.exports = router;