var TodoInput = (props) => {
  const { value, handleChange, handleClick } = props;

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default TodoInput;
