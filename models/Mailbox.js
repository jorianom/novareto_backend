const mongoose = require("mongoose");

const MailboxSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    celular: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Mailbox", MailboxSchema);
