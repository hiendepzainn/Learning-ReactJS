import { useState } from "react";
import ExpenseForm from "./components/expenseApp/ExpenseForm";
import ExpenseList from "./components/expenseApp/ExpenseList";
import ExpenseTotal from "./components/expenseApp/ExpenseTotal";

const App3 = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Ăn uống",
      amount: 30,
    },
    {
      id: 2,
      name: "Tắm giặt",
      amount: 20,
    },
  ]);

  const addExpense = (category, value) => {
    const newExpense = {
      id: Math.floor(Math.random() * 100000),
      name: category,
      amount: value,
    };
    setList([...list, newExpense]);
  };

  const deleteExpense = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <>
      <h2>Expense APP</h2>
      <ExpenseForm addExpense={addExpense} />
      <br />
      <br />
      <ExpenseList list={list} deleteExpense={deleteExpense} />
      <ExpenseTotal list={list} />
    </>
  );
};

export default App3;
