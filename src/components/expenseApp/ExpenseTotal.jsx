const ExpenseTotal = (props) => {
  const { list } = props;
  let total = 0;
  list.forEach((item) => {
    total += item.amount;
  });
  return (
    <>
      <h3>Total: {total}K</h3>
    </>
  );
};

export default ExpenseTotal;
