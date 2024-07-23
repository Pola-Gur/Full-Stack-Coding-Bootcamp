const express = require("express")
const userRouter = require('./routes/userRouter.js')
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`run on ${PORT}`)
})

app.use('/user', )
