import axios from "axios";

const baseUrl = "https://mern-todo-app-server-3ujh.onrender.com/";

const getAllTodo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ---> ", data);
    setTodo(data);
  });
};

// Add
const addTodo = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

// Update
const updateTodo = (toDoId, text, setTodo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

// Delete
const deleteTodo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
