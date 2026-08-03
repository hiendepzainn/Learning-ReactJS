import { Button } from "antd";
import { useState } from "react";
import FormModal from "./book.form.modal";

const BookForm = (props) => {
  const { loadBooks, current, pageSize } = props;

  const [isModalOpen, setIsModelOpen] = useState(false);

  const handleClick = () => {
    setIsModelOpen(true);
  };

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
        <Button type="primary" onClick={handleClick}>
          Create Book
        </Button>
        <FormModal
          isModalOpen={isModalOpen}
          setIsModelOpen={setIsModelOpen}
          loadBooks={loadBooks}
          current={current}
          pageSize={pageSize}
        />
      </div>
    </>
  );
};

export default BookForm;
