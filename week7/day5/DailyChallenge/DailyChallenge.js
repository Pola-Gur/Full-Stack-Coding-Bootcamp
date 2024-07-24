const express = require("express");
const { emojis } = require("./config/emojis.js");

const app = express()

const PORT = 3001;

app.listen(PORT, ()=> {
    console.log("run on ", PORT);
})

app.get("/emojis", (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length)
    const randomEmoji = emojis[randomIndex];

    res.json(randomEmoji);
});

