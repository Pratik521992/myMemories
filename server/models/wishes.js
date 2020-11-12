const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String
    },
    date: {
        type: Date
    },
    linkedin: {
        type: String
    },
    facebook: {
        type: String
    },
    wishes: {
        type: String
    },
}, { timestamps: true })

const Wishes = mongoose.model('Wishes', wishSchema);

module.exports = { Wishes }