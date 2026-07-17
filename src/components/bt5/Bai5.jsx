import { useState } from "react";

var Bai5 = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setList([...list, { id: Math.floor(Math.random() * 100000), name: value }]);
    setValue("");
  };

  const handleDelete = (id) => {
    console.log(id);
    const newList = list.filter((item) => item.id != id);
    setList(newList);
  };
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <br />
      <br />
      {list.map((item) => {
        return (
          <div key={item.id}>
            <span>- {item.name}</span>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Bai5;
