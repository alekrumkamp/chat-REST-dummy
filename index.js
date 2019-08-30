const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let comments = [];
const port = 8080;

app.use(bodyParser.json());

app.get('/chat', (req,res)=>{
  res.json({history:comments});
});

app.post('/chat',(req,res)=>{
  let newEntry = {
    date: Date.now(),
    name: req.body.name,
    message:req.body.message
  }
  comments.push(newEntry);
  res.json(newEntry);
});

app.listen(port);

console.log("Listening on port " + port);