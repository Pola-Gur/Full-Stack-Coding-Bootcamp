const express = require('express');
const router = express.Router();


// Sample in-memory database for storing books
const books = [
    {
        id: 1,
        title: "title1",
        author: "author1",
    },
    {
        id: 2,
        title: "title2",
        author: "author2",
    },
    {
        id: 3,
        title: "title3",
        author: "author3",
    },
    {
        id: 4,
        title: "title4",
        author: "author4",
    },
];

// Get all books
router.get("/books", (req, res) => {
    res.json(books);
}
)
// Add a new book
router.post("/books", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author ) {
        return res.status(400).json({ msg: "Title and author are required" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
    };

    books.push(newBook)
    res.status(201).kson(newBook)
})

// Update a book by ID
router.put("/books/:id", (req, res) => {
    const {id} = req.params;
    const index = books.findIndex(item => item.id == id);

    if (index === -1) return res.status(404).json({msg: `Book with ID = ${id} not found`});

    books[index] = { id: Number(id), ...req.body };
    res.json(books[index]);
})


// Delete a book by ID
router.delete("/books/:id", (req, res) => {
    const {id} = req.params;
    const index = books.findIndex(item => item.id == id);

    if (index === -1) return res.status(404).json({msg: `ID = ${id} not found`});

    books.splice(index, 1)
    res.status(200).json({ msg: "Book deleted"})
})



module.exports = router;