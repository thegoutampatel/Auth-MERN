import express from 'express'

const app = express();
const port = 4000;

app.get('/', (req,res) => {
    res.status(201).json("Server Started");
})

app.listen(port, () =>{
    console.log(`Server Started at port no ${port}`);
})