// // ```js
// // import mongoose from "mongoose";

// import mongoose from "mongoose"

// // const todoSchema = new mongoose.Schema({
// //     name: String,
// //     desc: String,
// //     isDone: Boolean
// // });

// // const Todo = mongoose.model("Todo", todoSchema);

// // export default Todo;
// // ```



// import mongoose from "mongoose"

// const TodoSchema = new mongoose.Schema({
//     name: String,
//     desc: String,
//     isDone:Boolean
// });
// export const Todo = mongoose.model('Todo',TodoSchema)
// export default Todo;
app.get("/click", async (req, res) => {
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
});