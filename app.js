const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const postsData = new Post();


app.get("/", (req,res)=>{
   res.status(200).send("Hello World!!");
   });

app.get("/api/posts", (req,res)=> {



   res.status(200).send(postsData.get());
});

app.listen(3000, ()=> console.log("Listening on http://localhost:3000"));

