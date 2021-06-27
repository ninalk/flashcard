const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/cards');

// /*---------- Public Routes ----------*/
router.post('/new', cardsCtrl.create);
router.get('/', cardsCtrl.index);

/*---------- Protected Routes ----------*/
router.delete('/:id', cardsCtrl.deleteCard);
router.put('/:id', cardsCtrl.update);


module.exports = router;