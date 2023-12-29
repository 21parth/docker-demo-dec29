import express from 'express';
const app = express();
const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`)
})

app.get("/",(req,res)=>{
    res.status(200).send({"name":"parth"})
})