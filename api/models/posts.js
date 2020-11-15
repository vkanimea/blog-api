const PATH = "./data.json";
const fs = require('fs');

class Post {
   get() {
     /** Get Posts */
     return this.readData();
   }

   getIndividualBlog() {
       /** Get One Blog Post */
   }

   add(newPost) {
      /** Add new Post */
      const currentPosts = this.readData();
      currentPosts.unshift(newPost); /* Shifts the new post to top   */
      this.storeData(currentPosts);  

   }

   readData() {
      let rawdata = fs.readFileSync(PATH);
      let posts =  JSON.parse(rawdata);
      return posts;
   }

   storeData(rawData) {
      let data = JSON.stringify(rawData);
      fs.writeFileSync(PATH, data);

   }

}

module.exports = Post;