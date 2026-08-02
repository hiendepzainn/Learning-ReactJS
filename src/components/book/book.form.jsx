import { Button, Input, Modal, Select } from "antd";
import { useState } from "react";

const BookForm = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModelOpen(false);
  };

  const handleClick = () => {
    setIsModelOpen(true);
  };

  const handleChangeFile = (e) => {
    console.log(e.target.files[0]);
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
        <Modal
          title="Add new Book"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ marginBottom: "20px" }}>
            <div>Tiêu đề</div>
            <Input />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>Tác giả</div>
            <Input />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>Giá tiền</div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "93%" }}>
                <Input style={{ borderRadius: " 5px 0px 0px 5px" }} />
              </div>
              <div style={{ width: "7%" }}>
                <Input
                  value={"đ"}
                  style={{ borderRadius: " 0px 5px 5px 0px" }}
                />
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>Số lượng </div>
            <Input />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div>Thể loại</div>
            <Select
              defaultValue="Arts"
              style={{ width: "100%" }}
              // onChange={handleChange}
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
            <Button style={{ marginTop: "5px" }} type="primary" danger>
              <label htmlFor="fileBook">Upload</label>
            </Button>
            <input
              hidden
              id="fileBook"
              type="file"
              onChange={handleChangeFile}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default BookForm;
