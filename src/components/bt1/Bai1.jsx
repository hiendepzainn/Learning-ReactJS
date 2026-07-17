var Bai1 = () => {
  const list = [
    {
      id: 1,
      content: "Watching tutorials",
    },
    {
      id: 2,
      content: "Fixing bugs",
    },
    {
      id: 3,
      content: "Playing games",
    },
  ];

  return (
    <>
      <div>To Do List</div>
      <div>--------------------------</div>
      {list.map((item, index) => {
        return <div>- {item.content}</div>;
      })}
    </>
  );
};

export default Bai1;
