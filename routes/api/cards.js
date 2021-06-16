const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/cards');

// /*---------- Public Routes ----------*/
router.post('/new', cardsCtrl.create);

/*---------- Protected Routes ----------*/


module.exports = router;