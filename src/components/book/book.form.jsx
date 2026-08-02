import { Button } from "antd";

const BookForm = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Book List</h3>
        <Button type="primary">Create Book</Button>
      </div>
    </>
  );
};

export default BookForm;
