import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import {
  Button,
  Input,
  Modal,
  notification,
  Pagination,
  Select,
  Table,
} from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableDrawer from "./book.table.drawer";
import { updateBook, uploadThumbnail } from "../../services/api.book";

const BookTable = (props) => {
  const { data, loadBooks, total, current, pageSize, setCurrent, setPageSize } =
    props;

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [dataDrawer, setDataDrawer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [id, setId] = useState("");
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [preview, setPreview] = useState("");
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState("");

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
              onClick={() => handleClickUpdate(record)}
            />
            <DeleteTwoTone twoToneColor="#f71b22" />
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

  const handleUpdate = async () => {
    if (mainText == "" || price == "" || author == "" || quantity == "") {
      notification.error({
        message: "Update Book",
        description: "Please fill Fields!",
      });
    } else {
      const newThumbnail = await (file
        ? (async () => {
            const res1 = await uploadThumbnail(file);
            console.log("hehe");
            return res1.data.fileUploaded;
          })()
        : thumbnail);

      const res2 = await updateBook(
        id,
        newThumbnail,
        mainText,
        author,
        +price,
        +quantity,
        category,
      );

      if (res2.data) {
        notification.success({
          message: "Update Book",
          description: "Update success",
        });

        setIsModalOpen(false);
        await loadBooks(current, pageSize);
        setFile(null);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeSelect = (value) => {
    setCategory(value);
  };

  const handleClickUpdate = (record) => {
    setIsModalOpen(true);
    setId(record._id);
    setMainText(record.mainText);
    setAuthor(record.author);
    setCategory(record.category);
    setQuantity(record.quantity);
    setPrice(record.price);

    setPreview(
      `${import.meta.env.VITE_BACKEND_URL}/images/book/${record.thumbnail}`,
    );
    setThumbnail(record.thumbnail);
  };

  const handleChangeFile = (e) => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(fileUrl);
    setFile(e.target.files[0]);
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

      <Modal
        okText="Update"
        title="Update Book"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={closeModal}
      >
        <div style={{ marginBottom: "20px" }}>
          <div>ID</div>
          <Input value={id} disabled />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div>Tiêu đề</div>
          <Input
            value={mainText}
            onChange={(e) => setMainText(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div>Tác giả</div>
          <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div>Giá tiền</div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "93%" }}>
              <Input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ borderRadius: " 5px 0px 0px 5px" }}
              />
            </div>
            <div style={{ width: "7%" }}>
              <Input value={"đ"} style={{ borderRadius: " 0px 5px 5px 0px" }} />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div>Số lượng </div>
          <Input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div>Thể loại</div>
          <Select
            value={category}
            style={{ width: "100%" }}
            onChange={handleChangeSelect}
            options={[
              { value: "Arts", label: "Arts" },
              { value: "Business", label: "Business" },
              { value: "Comics", label: "Comics" },
              { value: "Cooking", label: "Cooking" },
              { value: "Entertainment", label: "Entertainment" },
              { value: "History", label: "History" },
              { value: "Music", label: "Music" },
              { value: "Sports", label: "Sports" },
              { value: "Teen", label: "Teen" },
              { value: "Travel", label: "Travel" },
            ]}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div>Ảnh thumbnail</div>
          <Button
            style={{
              marginTop: "5px",
              cursor: "pointer",
              marginBottom: "15px",
            }}
            type="primary"
            danger
          >
            <label style={{ cursor: "pointer" }} htmlFor="fileBook">
              Upload
            </label>
          </Button>
          <input hidden id="fileBook" type="file" onChange={handleChangeFile} />
          <div style={{ width: "150px" }}>
            <img style={{ width: "100%" }} src={preview} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookTable;
