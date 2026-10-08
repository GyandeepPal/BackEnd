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
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home
app.get("/", (req, res) => {
  res.render("question");
});

// Click
app.get("/click", async (req, res) => {
  try {
    for (let index = 0; index < 10; index++) {
      let e = await Todo.create({
        name: "Gyan",
        age: 20,
        city: "Prayagraj",
        date: new Date()
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