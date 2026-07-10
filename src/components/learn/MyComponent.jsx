import "./style.css";

const MyComponent = () => {
  // const variable = 12;
  // const variable = "Hello princess";
  // const variable = [1, 2, 3];
  const variable = { name: "Hien", age: 23 };
  return (
    <>
      <div>hello hehehe, this is MyComponent</div>
      <div className="abc">{JSON.stringify(variable)}</div>
      <div>{console.log("hehe")}</div>
    </>
  );
};

export default MyComponent;
