const Card = require('../models/card');

module.exports = {
    create,
    index,
    deleteCard
}

async function deleteCard(req, res) {
    try {
        const card = await Card.findByIdAndDelete(req.params.id);
        res.json();
    } catch(err) {
        console.log(err)
        res.send({err});
    }
}

async function index(req, res) {
    try {
        const cards = await Card.find({}).populate('user').exec();
        res.status(200).json({cards});
    } catch(err){
        res.json(err)
    }
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