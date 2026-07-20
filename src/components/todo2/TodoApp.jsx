import { useState } from "react";
import TodoDisplay from "./TodoDisplay";
import TodoInput from "./TodoInput";

const TodoApp = () => {
  const [list, setList] = useState([]);

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
      <h2>Todo App</h2>
      <TodoInput list={list} addTodo={addTodo} />
      <br />
      <br />
      <TodoDisplay list={list} deleteTodo={deleteTodo} />
    </>
  );
};

export default TodoApp;
