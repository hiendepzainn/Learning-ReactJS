import { useState } from "react";
import TodoData from "./components/todo/TodoData";
import TodoInput from "./components/todo/TodoInput";

const App = () => {
  const [list, setList] = useState([
    {
      id: 84923,
      name: "Making heroes!",
    },
    {
      id: 83423,
      name: "Cleaning house!",
    },
  ]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setList([...list, { id: Math.floor(Math.random() * 100000), name: value }]);
    setValue("");
  };

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id != id);
    setList(newList);
  };

  return (
    <>
      <h2>Todo App</h2>
      <TodoInput
        value={value}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <TodoData list={list} handleDelete={handleDelete} />
    </>
  );
};

export default App;
