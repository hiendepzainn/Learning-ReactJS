import { Form, Input, Modal, Select } from "antd";

const FormModalUnControl = (props) => {
  const { isModalOpen, setIsModelOpen } = props;

  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModelOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
      </Modal>
    </>
  );
};

export default FormModalUnControl;
