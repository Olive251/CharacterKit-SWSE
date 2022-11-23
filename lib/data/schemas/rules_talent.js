const mongoose = require('mongoose');

const Rules_Talent = new mongoose.Schema({
    name: String,
    description: String,
    prerequisite: {type: mongoose.Types.ObjectId, ref:'Rules_Talent'},
})

//module.exports = mongoose.model("Rules_Talent", Rules_Talent);