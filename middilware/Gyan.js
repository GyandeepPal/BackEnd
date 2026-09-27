const express = require('express');
const app = express()
const port = 3000
const fs = require("fs")
// app.use(express.static("public"))

// middleware 1
app.use((req, res, next) => {
  req.Gyan = "Gyan now come to my Office"
  // fs.writeFileSync("Gyan.txt",`${new Date().toLocaleString()} - ${req.method}`)
  fs.appendFileSync("Gyan.txt", `${new Date().toLocaleString()} - ${req.method}\n`)
  console.log("m1");
  // res.send("middlelware was working okk")
  next()
})
// middleware 1
app.use((req, res, next) => {
  console.log(`${new Date().toLocaleString()} - ${req.method}`);
  next()

})

app.get('/', (req, res) => {
  res.send('Hello World! \n' + req.Gyan)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})