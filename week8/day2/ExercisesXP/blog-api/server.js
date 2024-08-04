const express = require("express");
const router = require('./routes/routes')
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/posts', router);

app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});