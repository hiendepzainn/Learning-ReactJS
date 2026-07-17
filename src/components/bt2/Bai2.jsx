import { useState } from "react";

var Bai2 = () => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <h3>{task}</h3>
      <input type="text" value={task} onChange={handleChange} />
    </>
  );
};

export default Bai2;
