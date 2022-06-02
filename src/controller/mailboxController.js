const Mailbox = require("../models/mailbox");
const { validationResult } = require("express-validator");

exports.addMailbox = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const newMailbox = new Mailbox(req.body);
        await newMailbox.save();
        res.status(200).json({
            message: "Mailbox saved successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.getMailboxes = async (req, res) => {
    try {
        const mailboxes = await Mailbox.find();
        res.status(200).json({
            mailboxes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
