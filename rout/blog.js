// const express = require("express");
// const router = express.Router();



// router.get("/blog", (req, res) => {
//     res.send("Blog Home");
// });

// router.get("/about", (req, res) => {
//     res.send("Blog About");
// });


// router.get("/Gyan", (req, res) => {
//     res.send("Blog About Gyam");
// });


// router.get("/blogpost", (req, res) => {
//     res.send("Blog About blogposted on the gyan");
// });
// module.exports = router;




const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Gyan')
})


app.get('/:slug', (req, res) => {
  res.send('Hello World! about')
 
})


app.get('/about/:slug', (req, res) => {
  res.send('Hello World! about')
})

app.get('/contact', (req, res) => {
  res.send('Hello World! contac')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})