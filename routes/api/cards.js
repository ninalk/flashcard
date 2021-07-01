const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/cards');

// /*---------- Public Routes ----------*/
router.post('/new', cardsCtrl.create);
router.get('/', cardsCtrl.index);
router.get('/cards/:category', cardsCtrl.indexCategory);

/*---------- Protected Routes ----------*/
router.delete('/cards/:id', cardsCtrl.deleteCard);
router.put('/cards/:id', cardsCtrl.update);


module.exports = router;