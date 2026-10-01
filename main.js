
// const express = require("express");
// const app = express();




// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })




// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });

const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/', (req, res) => {
  res.sendFile(__dirname,'/index.js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})