import { useState } from "react";

const TodoInput = (props) => {
  const { addTodo } = props;

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    addTodo(value);
    setValue("");
  };
  return (
    <>
      <input value={value} type="text" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default TodoInput;
