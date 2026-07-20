import { useState } from "react";
import TodoDisplay from "./components/todo2/TodoDisplay";
import TodoInput from "./components/todo2/TodoInput";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const App = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Makking horeos",
    },
    {
      id: 2,
      name: "Enjoy Peppa pig",
    },
  ]);

  const addTodo = (value) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      name: value,
    };
    setList([...list, newTodo]);
  };
  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <>
      <Header />
      <h2>Todo App</h2>
      <TodoInput list={list} addTodo={addTodo} />
      <br />
      <br />
      <TodoDisplay list={list} deleteTodo={deleteTodo} />
      <Footer />
    </>
  );
};

export default App;
