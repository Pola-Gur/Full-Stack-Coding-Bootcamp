const express = require("express");
const app = express();
const { fetchPosts} = require("./data/dataService.js")

const PORT = 5000;
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Run on ${PORT}`);
});


app.get('/posts', (req, res) => {
    fetchPosts()
        .then(posts => {
            res.json(posts);
            console.log("Data has been successfully retrieved and sent as a response");
        })
        .catch(error => {
            res.status(500).send('Error retrieving data');
        });
});