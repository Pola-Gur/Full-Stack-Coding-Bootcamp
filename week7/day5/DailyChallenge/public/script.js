const url = "http://localhost:3001/emojis"
const submitUrl = "http://localhost:3001/submit";

const randomEmoji = document.getElementById("emoji")
const answerDIV = document.getElementById("options");
const feedbackDiv = document.getElementById("feedback");


let currentEmojiName = '';


const loadEmoji = () => {
    fetch(url)
    .then((res) => res.json())
    .then((emojis) => {
        // console.log(emojis);
        // console.log(emojis.randomEmoji);
        randomEmoji.innerHTML = emojis.randomEmoji.emoji
        currentEmojiName = emojis.randomEmoji.name;
        answerDIV.innerHTML = '';

        emojis.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.name;
            button.onclick = () => submitGuess(option.name);
            answerDIV.appendChild(button);
        });
    })
    .catch((e) => {
        console.log(e);
    });
};

const submitGuess = (guess) => {
    fetch(submitUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ guess, correctAnswer: currentEmojiName }),
    })
        .then(res => res.json())
        .then(data => {
            feedbackDiv.innerHTML = data.isCorrect ? "Right!" : "Wrong!";
            setTimeout(() => {
                feedbackDiv.innerHTML = '';
                loadEmoji();
            }, 2000);
        });
};


loadEmoji()
