const models = require("../models/models.js");

module.exports = {

    getAllBooks: async (req, res) => {
        try {
            const books = await models.getAllBooks();
            res.json(books);
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: "internal server error"})
        }
    },

    getBook: async (req, res) => {
        try {
            const { id} = req.params;
            const book = await models.getBookById(id); 

            if (!book) {
                return res.status(404).json({ error: "Book not found" });
            }
    
            res.json(book);
        } catch(error) {
            console.log(error);
            res.status(404).json({ error: "Book not found"})
        }
    },

    addBook: async (req, res) => {
        try {
            const { title, author, publishedYear} = req.body;
            const newBook = await models.createBook({ title, author, publishedYear });
            res.status(201).json(newBook);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};
