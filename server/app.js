import express from 'express'
import "./db/connection.js"
import router from './routes/router.js'
import cors from 'cors'
const app = express();
const port = 4000;

// app.get('/', (req,res) => {
//     res.status(201).json("Server Started");
// })

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () =>{
    console.log(`Server Started at port no ${port}`);
})