const express = require("express");
const cors = require("cors");
const { taskRouter } = require("./routes/task.router");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); 
app.use("/api/tasks", taskRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});