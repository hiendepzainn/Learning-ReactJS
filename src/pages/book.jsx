import { useState } from "react";
import BookForm from "../components/book/book.form";
import BookTable from "../components/book/book.table";
import { getBooksPaginate } from "../services/api.book";

const BookPage = () => {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  const loadBooks = async (current, pageSize) => {
    const res = await getBooksPaginate(current, pageSize);

    if (res.data) {
      setTotal(res.data.meta.total);
      setData(res.data.result);
    }
  };

  return (
    <>
      <div
        style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "95%" }}>
          <BookForm
            loadBooks={loadBooks}
            current={current}
            pageSize={pageSize}
          />
          <BookTable
            data={data}
            loadBooks={loadBooks}
            total={total}
            current={current}
            pageSize={pageSize}
            setCurrent={setCurrent}
            setPageSize={setPageSize}
          />
        </div>
      </div>
    </>
  );
};

export default BookPage;
