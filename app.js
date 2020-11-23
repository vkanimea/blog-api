const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const postsData = new Post();

/*
app.get("/", (req,res)=>{
   res.status(200).send("Hello World!!");
   });
*/
app.use((req, res, next)=> {
   res.setHeader("Access-Control-Allow-Origin", "*");
   next();
});

app.use('/uploads', express.static('/uploads'));

app.get("/api/posts", (req,res)=> {
   /* test a post to the /data.json file 
   const test = {
       testing:"testing"
   }
   postsData.add(test);

   */
   res.status(200).send(postsData.get());
});

app.get("/api/posts/:post_id", (req, res) => {
   const postId = req.params.post_id;
   const foundPost = postsData.getIndividualBlog(postId);
   if (foundPost) {
      res.status(200).send(foundPost)
   } else {
      res.status(404).send("Not Found");

   }


})

app.listen(3000, ()=> console.log("Listening on http://localhost:3000"));

