const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const birthdaySchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    writerName: {
        type: String
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
    pagination: {
        type: String
    }
}, { timestamps: true })

const Birthdays = mongoose.model('Birthdays', birthdaySchema);

module.exports = { Birthdays }