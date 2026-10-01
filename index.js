const express = require('express');
const blog =require('./rout/blog')

const app = express()
const port = 3000


// app.use(express.static("temp"));
// app.use(express.static("rout"));
app.use('/',blog)

app.get('/', (req, res) => {
  console.log("Hey it's a get requist");
  res.send('Hello GyanDeep!')

})
app.post('/', (req, res) => {
  console.log("PUT request");
  res.send("PUT request received");
});

app.put('/', (req, res) => {
  console.log("PUT request");
  res.send("PUT request received");
});


app.delete('/', (req, res) => {
  console.log("delete request");
  res.send("delete request received");
});

app.get("/about", (req, res) => {
  console.log("Hey it's index");
  res.sendFile('temp/about.html', { root: __dirname });
});

app.get("/api", (req, res) => {

  res.json({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, name: ["gyan", "Rahul", "pal"] });
});


// slugify("Hello World!", {
//     lower: true,    // lowercase
//     strict: true,   // special characters remove
//     replacement: "-" // spaces ko - se replace
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
