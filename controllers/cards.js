const Card = require('../models/card');

module.exports = {
    create,
    index,
    deleteCard,
    update,
    indexCategory
}

async function indexCategory(req, res) {
    console.log(req.params.category, 'hitting category in controller')
    try {
        const cards = await Card.find({ category: req.params.category }).populate('user').exec();
        res.status(200).json({cards});
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

async function update(req, res) {
    console.log(req.body, req.params.id, ' update in controller')
    try {
        const card = await Card.findById(req.params.id);
        card.category = req.body.category;
        card.question = req.body.question;
        card.answer = req.body.answer;
        await card.save();
        res.status(200).json({card: card})
    } catch(err) {
        console.log(err)
        res.send({err})
    }
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