const express = require("express");
const mailboxController = require("../controller/mailboxController");
const { check } = require("express-validator");
const router = express.Router();

router.get("/", mailboxController.getMailboxes);
router.post(
    "/add",
    [
        check("name").not().isEmpty(),
        check("email").isEmail(),
        check("type").not().isEmpty(),
        check("comments").not().isEmpty(),
    ],
    mailboxController.addMailbox
);

module.exports = router;
