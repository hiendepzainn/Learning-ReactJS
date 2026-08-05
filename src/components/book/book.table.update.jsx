import { Button, Input, Modal, notification, Select } from "antd";
import { useState } from "react";
import { updateBook, uploadThumbnail } from "../../services/api.book";

const UpdateModal = (props) => {
  const {
    isModalOpen,
    setIsModalOpen,
    setCategory,
    setAuthor,
    setMainText,
    setPreview,
    setPrice,
    setQuantity,
    mainText,
    price,
    author,
    quantity,
    thumbnail,
    id,
    category,
    preview,
    loadBooks,
    current,
    pageSize,
  } = props;

  const [file, setFile] = useState(null);

  const handleChangeFile = (e) => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(fileUrl);
    setFile(e.target.files[0]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeSelect = (value) => {
    setCategory(value);
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
  return (
    <>
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

export default UpdateModal;
