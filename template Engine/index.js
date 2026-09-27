const express = require('express');
const app = express()
const port = 3000
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  let siteName = " Gyan blog"
  let searchText = "Serach Now "
  res.render("index", { siteName: siteName, searchTxtx: searchText })
})


app.get('/blog/:slug', (req, res) => {
  let siteName = "wellcom to Gyan blog"
  let searchTxtx = "Serach Now any thing to any where"
  res.render("index", { siteName: siteName, searchTxtx: searchTxtx })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})