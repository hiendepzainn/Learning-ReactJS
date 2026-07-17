import { useState } from "react";

var Bai3 = () => {
  const [inputValue, setInputValue] = useState("");
  const [header, setHeader] = useState("Header");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setHeader(inputValue);
    setInputValue("");
  };

  return (
    <>
      <h3>{header}</h3>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default Bai3;
