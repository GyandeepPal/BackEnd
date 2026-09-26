const express = require("express");
const router = express.Router();

router.get("/blog", (req, res) => {
    res.send("Blog Home");
});

router.get("/about", (req, res) => {
    res.send("Blog About");
});


router.get("/Gyan", (req, res) => {
    res.send("Blog About GYan");
});


router.get("/blogpost", (req, res) => {
    res.send("Blog About blogposted on the gyan");
});
module.exports = router;