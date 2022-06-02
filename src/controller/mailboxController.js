const Mailbox = require("../model/mailbox");

exports.addMailbox = async (req, res) => {
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
