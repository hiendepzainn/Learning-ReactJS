import reactLogo from "../../assets/react.svg";

var TodoData = (props) => {
  const { list, handleDelete } = props;
  return (
    <>
      {list.length == 0 ? (
        <div>
          <img src={reactLogo} />
        </div>
      ) : (
        list.map((item) => {
          return (
            <div key={item.id}>
              <span>- {item.name} </span>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          );
        })
      )}
    </>
  );
};

export default TodoData;
