const express = require("express");
const app = express();


const indexRouter = require('./routes/index');

app.use('/', indexRouter);

const port = 3006;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});