// ```js
// import mongoose from "mongoose";

// const todoSchema = new mongoose.Schema({
//     name: String,
//     desc: String,
//     isDone: Boolean
// });

// const Todo = mongoose.model("Todo", todoSchema);

// export default Todo;
// ```



import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
    name: String,
    desc: String,
    isDone:Boolean
});
export const Todo = mongoose.model('Todo',TodoSchema)
export default Todo;


