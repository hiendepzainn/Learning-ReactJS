import { useState } from "react";

var Bai4 = () => {
  const [value, setValue] = useState("");

  const [list, setList] = useState([
    {
      id: 1,
      name: "Learning React",
    },
    {
      id: 2,
      name: "Watching Video",
    },
    {
      id: 3,
      name: "Beatboxing",
    },
  ]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setList([...list, { id: list.length + 1, name: value }]);
    setValue("");
  };
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <br />
      <br />
      {list.map((item, index) => {
        return <div key={index}>- {item.name}</div>;
      })}
    </>
  );
};

export default Bai4;
