const express = require("express");
const conectarDB = require("./services/database");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json()); //body parser

conectarDB();
app.use("/api/mailbox", require("./routes/mailbox"));

app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}`);
});
