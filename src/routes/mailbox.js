const express = require("express");

const router = express.Router();

router.get("/", async function (req, res) {
    try {
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
router.post("/add", async function (req, res) {
    try {
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
