import { Button, Input, Modal, notification, Select } from "antd";
import { useState } from "react";
import { createNewBook, uploadThumbnail } from "../../services/api.book";

const FormModal = (props) => {
  const { isModalOpen, setIsModelOpen, loadBooks, current, pageSize } = props;

  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleOk = async () => {
    if (preview == "") {
      notification.error({
        message: "Create New Book",
        description: "Please Upload image!",
      });
    } else {
      if (
        mainText == "" ||
        price == "" ||
        author == "" ||
        quantity == "" ||
        category == ""
      ) {
        notification.error({
          message: "Create New Book",
          description: "Please fill Fields!",
        });
      } else {
        const res1 = await uploadThumbnail(file);
        const thumbnail = res1.data.fileUploaded;

        const res2 = await createNewBook(
          thumbnail,
          mainText,
          author,
          +price,
          +quantity,
          category,
        );
        console.log(res2);
        if (res2.data) {
          notification.success({
            message: "Create New Book",
            description: "Create success",
          });

          //Close modal
          setIsModelOpen(false);

          //Clear data input
          clearDataInput();

          //reload data book list
          await loadBooks(current, pageSize);
        } else {
          notification.error({
            message: "Create New Book",
            description: JSON.stringify(res2.message),
          });
        }
      }
    }
  };

  const handleCancel = () => {
    setIsModelOpen(false);
    clearDataInput();
  };

  const handleChangeFile = (e) => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(fileUrl);
    setFile(e.target.files[0]);
  };

  const handleChangeSelect = (value) => {
    setCategory(value);
  };

  const clearDataInput = () => {
    setMainText("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setPreview("");
    setFile(null);
  };
  return (
    <>
      <Modal
        okText="Create"
        title="Add new Book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
            defaultValue="Arts"
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
          {preview == "" ? (
            <></>
          ) : (
            <div style={{ width: "150px" }}>
              <img style={{ width: "100%" }} src={preview} />
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default FormModal;
