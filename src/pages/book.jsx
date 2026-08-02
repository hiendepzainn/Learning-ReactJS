import BookForm from "../components/book/book.form";
import BookTable from "../components/book/book.table";

const BookPage = () => {
  return (
    <>
      <div
        style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "95%" }}>
          <BookForm />
          <BookTable />
        </div>
      </div>
    </>
  );
};

export default BookPage;
