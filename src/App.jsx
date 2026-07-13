import "./components/todo/todo.css";
import TodoContent from "./components/todo/TodoContent";
import TodoInput from "./components/todo/TodoInput";

const App = () => {
  const name = "Dinh Xuan Hien";
  const age = 22;

  const myFunction = (name) => {
    alert(`hello ${name}`);
  };

  return (
    <>
      <div className="todo-title">Todo List</div>
      <TodoInput myFunction={myFunction} />
      <TodoContent name={name} age={age} />
    </>
  );
};

export default App;
