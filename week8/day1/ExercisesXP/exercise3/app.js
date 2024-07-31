const express = require("express");
const app = express();
const booksRouter = require('./routes/books');

app.use(express.json());
app.use('/books', booksRouter);

const port = 3006;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});