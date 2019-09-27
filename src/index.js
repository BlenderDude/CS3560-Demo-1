const express = require("express");
const { doubleCharacters } = require("./functions");

const PORT = 3000;

const app = express();

app.get("/double-characters", (req, res) => {
    res.send(doubleCharacters(req.query.string));
});

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});
