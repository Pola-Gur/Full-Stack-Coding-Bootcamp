const Books = require("../config/db.js");

module.exports = {
    createBook: async (bookInfo) => {
        const { title, author, publishedYear } = bookInfo;

        try {
            const newId = Books.length ? Books[Books.length - 1].id + 1 : 1;
            const newBook = { id: newId, title, author, publishedYear };
            Books.push(newBook);
            return newBook;
        } catch (error) {
            throw error;
        }
    },


    getAllBooks: async () => {
        try {
            return Books;
        } catch (error) {
            throw error;
        }
    },

    getBookById: async (id) => {
        try {
            return Books.find(book => book.id === parseInt(id, 10));
        } catch (error) {
            throw error;
        }
    }
};