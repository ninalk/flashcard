const Card = require('../models/card');

module.exports = {
    create
}

async function create(req, res) {
    console.log(req.body, ' req.body')
    try {
        const card = await Card.create({
            category: req.body.category,
            question: req.body.question,
            answer: req.body.answer,
            user: req.user
        });

        const populatedCard = await card.populate('user').execPopulate();

        res.status(201).json({card: populatedCard});
    } catch(err) {
        console.log(err)
        res.json(err)
    }
}