const TodoDisplay = (props) => {
  const { list, deleteTodo } = props;

  const handleClick = (id) => {
    deleteTodo(id);
  };
  return (
    <>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <span>- {item.name} </span>
            <button
              onClick={() => {
                handleClick(item.id);
              }}
            >
              x
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TodoDisplay;
