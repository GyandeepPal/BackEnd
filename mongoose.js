import mongoose from "mongoose";
import  express  from "express";
import Todo from "./model/Todo.js"
// import { name } from "ejs";

await mongoose.connect("mongodb://localhost:27017/Todo")




const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({name:"Hey i am gyan deep pal",desc:"this is the description",isDone:"false",days:
    Math.floor(Math.random() * 33 + 4 * Math.random())})
    todo.save()
  res.send('Hello Gyan!')
})

// app.get('/a', async(req, res) => {
//     let todo= await Todo.findOne({})
//     console.log(todo);

//   res.send({name:todo.name,desc:desc})
// })



// const result = await Todo.deleteMany({});

// console.log(result);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})