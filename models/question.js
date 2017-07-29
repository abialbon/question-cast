const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    stem: String,
    ansChoice: String,
    distractors: Array,
    system: String,
    topic: String,
    type: String
});


module.exports = mongoose.model('question', questionSchema);