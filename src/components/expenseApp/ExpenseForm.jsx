import { useState } from "react";

const ExpenseForm = (props) => {
  const { addExpense } = props;

  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  // Tại sao setValue rồi mà console.log thì vẫn ra giá trị cũ?
  const handleChangeValue = (e) => {
    setValue(Number(e.target.value));
  };

  const handleClick = () => {
    addExpense(category, value);
    setCategory("");
    setValue("");
  };
  return (
    <>
      <div>
        <span>Tên khoản chi </span>
        <input type="text" value={category} onChange={handleChangeCategory} />
      </div>
      <div>
        <span>Số tiền </span>
        <input type="number" value={value} onChange={handleChangeValue} />
      </div>
      <div>
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
};

export default ExpenseForm;
