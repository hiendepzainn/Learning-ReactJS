import { Form, Input, Modal, Select } from "antd";

const UpdateModalUnControl = (props) => {
  const { isModalOpen, setIsModalOpen, form } = props;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onOk = () => {};
  return (
    <>
      <Modal
        okText="Update"
        title="Update Book"
        open={isModalOpen}
        onOk={onOk}
        onCancel={closeModal}
      >
        <Form layout="vertical" form={form}>
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
      </Modal>
    </>
  );
};

export default UpdateModalUnControl;
