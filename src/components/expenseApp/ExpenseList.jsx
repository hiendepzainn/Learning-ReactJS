const ExpenseList = (props) => {
  const { list, deleteExpense } = props;

  const handleClick = (id) => {
    deleteExpense(id);
  };
  return (
    <>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <span>
              + {item.amount}k {item.name}{" "}
            </span>
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

export default ExpenseList;
