import { Button, Form, Input, Modal, notification, Select } from "antd";
import { useState } from "react";
import { createNewBook, uploadThumbnail } from "../../services/api.book";

const FormModalUnControl = (props) => {
  const { isModalOpen, setIsModelOpen, loadBooks, current, pageSize } = props;

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModelOpen(false);
  };

  const handleChangeFile = (e) => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(fileUrl);
    setFile(e.target.files[0]);
  };

  const onFinish = async (values) => {
    console.log("Success:", values);

    if (preview == "") {
      notification.error({
        message: "Create New Book",
        description: "Please Upload image!",
      });
    } else {
      const res1 = await uploadThumbnail(file);
      const thumbnail = res1.data.fileUploaded;

      const res2 = await createNewBook(
        thumbnail,
        values.mainText,
        values.author,
        +values.price,
        +values.quantity,
        values.category,
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
        clearInput();

        //reload data book list
        await loadBooks(current, pageSize);
      } else {
        notification.error({
          message: "Create New Book",
          description: JSON.stringify(res2.message),
        });
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const clearInput = () => {
    form.resetFields();
    setFile(null);
    setPreview("");
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
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
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

export default FormModalUnControl;
