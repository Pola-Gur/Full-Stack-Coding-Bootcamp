const express = require("express");


const app = express();

const PORT = 5000;
app.use(express.json());
app.use(express.static('public'));

let books = [
    {
    id: 1,
    title: "title1",
    author: "author1",
    publishedYear: 2001,
    },
    {
    id: 2,
    title: "title2",
    author: "author2",
    publishedYear: 2002,
    },
    {
    id: 3,
    title: "title3",
    author: "author3",
    publishedYear: 2003,
    },
    {
    id: 4,
    title: "title4",
    author: "author4",
    publishedYear: 2004,
    },
]


app.get('/api/books', (req, res) => {
    res.send(books)
})

app.get("/api/books/:bookId", (req, res) => {
    console.log(req.params);
    const { bookId } = req.params; 

    const oneBook = books.find((item) => item.id == bookId);

    if (!oneBook) return res.status(404).json({msg: `Book (ID= ${id}) not found`});

    res.status(200).send(oneBook);
});


// app.post('/api/books', (req, res)=> {
//     let newBook = {
//         id: books.length -1,
//         title: req.body.title,
//         author: req.body.author, 
//         publishedYear: req.body.publishedYear,
//     }

//     books.push(newBook)
//     res.status(201).send(newBook)
// })

app.listen(PORT, () => {
    console.log(`Run on ${PORT}`);
});



app.post('/api/books', (req, res)=> {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
        return res.status(400).json({ msg: "Title, author, and published year are required" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear,
    };

    books.push(newBook)
    res.status(201).send(newBook)
})
