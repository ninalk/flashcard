const mongoose = require('mongoose');

const resourcesSchema = mongoose.Schema({
    cardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
    link: String
})


const cardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: String,
    question: String,
    answer: String,
    rightOrWrong: Boolean,
    resources: [resourcesSchema],
    date: {
        type: String,
        default: function() {
            const date = new Date();
            const d = date.getDate();
            const m = date.getMonth();
            const y = date.getFullYear();
            const quizDate = m + '/' + d + '/' + y;
            return quizDate;
        }
    }
}, {
    timestamp: true
});

module.exports = mongoose.model('Card', cardSchema);