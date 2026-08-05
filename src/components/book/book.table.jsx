import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Form, message, Pagination, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableDrawer from "./book.table.drawer";
import UpdateModalUnControl from "./book.table.update2";
import { deleteBook } from "../../services/api.book";
// import UpdateModal from "./book.table.update";

const BookTable = (props) => {
  const { data, loadBooks, total, current, pageSize, setCurrent, setPageSize } =
    props;

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [dataDrawer, setDataDrawer] = useState(null);
  //-------------------------------Controlled-component------------------
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const [id, setId] = useState("");
  // const [mainText, setMainText] = useState("");
  // const [author, setAuthor] = useState("");
  // const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [category, setCategory] = useState("");

  // const [preview, setPreview] = useState("");
  // const [thumbnail, setThumbnail] = useState("");
  //-------------------------------Controlled-component------------------

  //-------------------------------UnControlled-component------------------
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();
  const [preview, setPreview] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  //-------------------------------UnControlled-component------------------

  const openDrawer = (record) => {
    setDataDrawer(record);
    setIsOpenDrawer(true);
  };

  const closeDrawer = () => {
    setIsOpenDrawer(false);
  };

  const columns = [
    {
      title: "STT",
      key: "stt",
      render: (value, record, index) => {
        return (current - 1) * pageSize + index + 1;
      },
    },
    {
      title: "ID",
      dataIndex: "_id",
      key: "id",
      render: (value, record) => {
        return (
          <Link
            onClick={() => {
              openDrawer(record);
            }}
          >
            {value}
          </Link>
        );
      },
    },
    {
      title: "Tiêu đề",
      dataIndex: "mainText",
      key: "mainText",
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
      render: (value) => {
        const first = Math.floor(value / 1000);
        let second = value % 1000;
        if (String(second).length == 1) second = `00` + second;
        if (String(second).length == 2) second = `0` + second;
        return `${first}.${second} đ`;
      },
      width: "10%",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <>
            <EditTwoTone
              style={{ marginRight: "15px", cursor: "pointer" }}
              twoToneColor="#f0a12c"
              // onClick={() => handleClickUpdate(record)}
              onClick={() => handleClick(record)}
            />
            <Popconfirm
              placement="left"
              title="Delete Book"
              description="Are you sure to Delete this Book?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => handleDeleteBook(record._id)}
            >
              <DeleteTwoTone twoToneColor="#f71b22" />
            </Popconfirm>
          </>
        );
      },
      width: "8%",
    },
  ];

  const handleChangePagination = (page, pageSize) => {
    setCurrent(page);
    setPageSize(pageSize);
  };

  // const handleClickUpdate = (record) => {
  //   setIsModalOpen(true);
  //   setId(record._id);
  //   setMainText(record.mainText);
  //   setAuthor(record.author);
  //   setCategory(record.category);
  //   setQuantity(record.quantity);
  //   setPrice(record.price);

  //   setPreview(
  //     `${import.meta.env.VITE_BACKEND_URL}/images/book/${record.thumbnail}`,
  //   );
  //   setThumbnail(record.thumbnail);
  // };

  const handleClick = (record) => {
    setIsModalOpen(true);
    form.setFieldsValue({
      id: record._id,
      mainText: record.mainText,
      author: record.author,
      price: record.price,
      quantity: record.quantity,
      category: record.category,
    });

    setPreview(
      `${import.meta.env.VITE_BACKEND_URL}/images/book/${record.thumbnail}`,
    );
    setThumbnail(record.thumbnail);
  };

  const handleDeleteBook = async (id) => {
    const res = await deleteBook(id);
    if (res.data) {
      message.success("Delete successful!");
      loadBooks(current, pageSize);
    } else {
      message.error("Error!");
    }
  };

  useEffect(() => {
    loadBooks(current, pageSize);
  }, [current, pageSize]);

  return (
    <>
      <Table
        style={{ marginBottom: "10px", marginTop: "10px" }}
        columns={columns}
        dataSource={data}
        rowKey="_id"
        pagination={false}
      />

      <div style={{ display: "flex", justifyContent: "end" }}>
        <Pagination
          style={{ marginBottom: "50px", marginTop: "10px" }}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} trên ${total} books`
          }
          showSizeChanger={true}
          total={total}
          current={current}
          pageSize={pageSize}
          onChange={handleChangePagination}
        />
      </div>

      <TableDrawer
        dataDrawer={dataDrawer}
        isOpenDrawer={isOpenDrawer}
        closeDrawer={closeDrawer}
      />

      {/* <UpdateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        id={id}
        mainText={mainText}
        author={author}
        price={price}
        quantity={quantity}
        category={category}
        preview={preview}
        thumbnail={thumbnail}
        setAuthor={setAuthor}
        setCategory={setCategory}
        setMainText={setMainText}
        setPrice={setPrice}
        setQuantity={setQuantity}
        setPreview={setPreview}
        loadBooks={loadBooks}
        current={current}
        pageSize={pageSize}
      /> */}

      <UpdateModalUnControl
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        form={form}
        preview={preview}
        setPreview={setPreview}
        thumbnail={thumbnail}
        loadBooks={loadBooks}
        current={current}
        pageSize={pageSize}
      />
    </>
  );
};

export default BookTable;
