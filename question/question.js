import express from "express";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import Todo from "../model/Todo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/GyanGroup")
  // .then(() => {
  //   console.log("MongoDB Connected");
  // })
  // .catch((err) => {
  //   console.log("MongoDB Error:", err);
  // });

// EJS
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * arr.length);
  return arr[rno];
};

// Home
app.get("/", (req, res) => {
  res.render("question");
});
// Clear the collection todo

await Todo.deleteMany({});

// Click
app.get("/click", async (req, res) => {
  let name = ["Gyan", "Gourav", "Bhagirth", "Jay Tripathi"]
  let city = ["Allahabad", "Siwan", "Saliya", "Baliya "]
  let lang = ["HTML", "JS", "C++", "Java"]
  
  
  try {
    for (let index = 0; index < 10; index++) {
      let e = await Todo.create({
        name: getRandom(name),
        age: Math.floor(Math.random() * 22000),
        city: getRandom(city),
        language: getRandom(lang)
      });

      console.log(e);
    }

    res.render("question");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});