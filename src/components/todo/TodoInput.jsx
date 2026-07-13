var TodoInput = (props) => {
  const { myFunction } = props;

  myFunction("Hien");

  return (
    <>
      <div className="todo-input">
        <input type="text" />
        <button>Add</button>
      </div>
    </>
  );
};

export default TodoInput;
