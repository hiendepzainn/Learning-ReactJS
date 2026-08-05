import { Button, Form, Input, Modal, notification, Select } from "antd";
import { useState } from "react";
import { updateBook, uploadThumbnail } from "../../services/api.book";

const UpdateModalUnControl = (props) => {
  const {
    isModalOpen,
    setIsModalOpen,
    form,
    preview,
    setPreview,
    thumbnail,
    loadBooks,
    current,
    pageSize,
  } = props;
  const [file, setFile] = useState(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeFile = (e) => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(fileUrl);
    setFile(e.target.files[0]);
  };

  const onOk = () => {
    form.submit();
  };

  const onFinish = async (values) => {
    console.log("Success:", values);

    const newThumbnail = await (file
      ? (async () => {
          const res1 = await uploadThumbnail(file);
          console.log("hehe");
          return res1.data.fileUploaded;
        })()
      : thumbnail);

    const res2 = await updateBook(
      values.id,
      newThumbnail,
      values.mainText,
      values.author,
      +values.price,
      +values.quantity,
      values.category,
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
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        okText="Update"
        title="Update Book"
        open={isModalOpen}
        onOk={onOk}
        onCancel={closeModal}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="ID" name="id" rules={[]}>
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Tiêu đề"
            name="mainText"
            rules={[
              {
                required: true,
                message: "Vui lòng không được để trống!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tác giả"
            name="author"
            rules={[
              {
                required: true,
                message: "Vui lòng không được để trống!",
              },
              {
                pattern: /^[a-zA-ZÀ-ỹ\s]+$/,
                message: "Chỉ được phép điền ký tự chữ!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Giá tiền (đ)"
            name="price"
            rules={[
              {
                required: true,
                message: "Vui lòng không được để trống!",
              },
              {
                pattern: /^\d+$/,
                message:
                  "Chỉ được phép điền chữ số và không chứa khoảng trắng!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số lượng"
            name="quantity"
            rules={[
              {
                required: true,
                message: "Vui lòng không được để trống!",
              },
              {
                pattern: /^\d+$/,
                message:
                  "Chỉ được phép điền chữ số và không chứa khoảng trắng!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Thể loại"
            name="category"
            rules={[
              {
                required: true,
                message: "Vui lòng không được để trống!",
              },
            ]}
          >
            <Select
              style={{ width: "100%" }}
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
          </Form.Item>
        </Form>

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

export default UpdateModalUnControl;
