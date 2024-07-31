const express = require("express");

const app = express();

const PORT = 5003;
app.use(express.json());

app.get("/posts", (req, res) => {
    res.json(Object.values(dataBasePosts))
});


// app.get("/posts", (req, res) => {
//     res.send(dataBasePosts);
// });


let dataBasePosts = [
    {
    "id": 1,
    "title": "Introduction",
    "content": "Shalom leculam, followers!", 
    },
    {
    "id": 2,
    "title": "Funny story",
    "content": "Here is true ha-ha, hehe and ho-ho!",
    },
    {
    "id": 3,
    "title": "Homeland",
    "content": "Long touching story with open ending",
    },
    {
    "id": 4,
    "title": "Child dream",
    "content": "Astronaut? Doctor? Teacher? Cashier?"
    },
    {
    "id": 5,
    "title": "Eurotrip",
    "content": "smth about wonderful and cheap food, beautiful people and historical placec"
    },
]



// // GET /posts/:id: Return a specific blog post based on its id.
app.get("/posts/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params; 

    const onePost = dataBasePosts.find((item) => item.id == id);

    if (!onePost) return res.status(404).json({msg: `ID = ${id} not found`});

    res.send(onePost);
});
// // POST /posts: Create a new blog post.
// // app.post()
app.post("/posts", (req, res) => {
    const newPost = {
        "id": 6,
        "title": "wow",
        "content": "wow wow"
        }
    dataBasePosts[5] = newPost
});
// // // PUT /posts/:id: Update an existing blog post.
// // app.put()
// // // DELETE /posts/:id: Delete a blog post.
// // app.delete()

// // Implement error handling for invalid routes and server errors.
// // Start the Express app and listen on a specified port (e.g., 3000).


app.listen(PORT, () => {
    console.log(`Run on ${PORT}`);
});