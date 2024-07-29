const express = require("express");
const { emojis } = require("./config/emojis.js");
const cors = require("cors");

const app = express()
app.use(cors());
app.use(express.json()); 

const PORT = 3001;



app.use('/', express.static(__dirname + "/public"));

const getRandomEmojiWithOptions = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    
    const incorrectOptions = emojis.filter(e => e.name !== randomEmoji.name)
                                    .sort(() => 0.5 - Math.random())
                                    .slice(0, 3);
    const options = [randomEmoji, ...incorrectOptions].sort(() => 0.5 - Math.random());

    return { randomEmoji, options };
};

app.get("/emojis", (req, res) => {
    const { randomEmoji, options } = getRandomEmojiWithOptions();
    res.json({ randomEmoji, options });
});

app.post('/submit', (req, res) => {
    const { guess, correctAnswer } = req.body;
    const isCorrect = guess === correctAnswer;
    res.json({ isCorrect });
});


app.listen(PORT, ()=> {
    console.log("run on ", PORT);
})