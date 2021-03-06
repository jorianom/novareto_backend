const express = require("express");
const conectarDB = require("./services/database");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

conectarDB();
app.use(express.json()); //body parser
app.use(cors());
app.use("/api/mailbox", require("./routes/mailbox"));

app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}`);
});
