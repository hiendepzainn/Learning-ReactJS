import reactLogo from "../../assets/react.svg";

var TodoContent = (props) => {
  console.log("check data: ", props);

  const { name, age } = props;
  return (
    <>
      <div className="todo-content">
        <div>Learning React {name}</div>
        <div>Cleaning House {age}</div>
        <img src={reactLogo} alt="react-img" />
      </div>
    </>
  );
};

export default TodoContent;
