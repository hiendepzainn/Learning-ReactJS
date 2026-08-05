import { Form, Input, Modal, Select } from "antd";

const UpdateModalUnControl = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

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
        <Form layout="vertical">
          <Form.Item label="ID" name="id" rules={[]}>
            <Input disabled />
          </Form.Item>

          <Form.Item label="Tiêu đề" name="mainText" rules={[]}>
            <Input />
          </Form.Item>

          <Form.Item label="Tác giả" name="author" rules={[]}>
            <Input />
          </Form.Item>

          <Form.Item label="Giá tiền (đ)" name="price" rules={[]}>
            <Input />
          </Form.Item>

          <Form.Item label="Số lượng" name="quantity" rules={[]}>
            <Input />
          </Form.Item>

          <Form.Item label="Thể loại" name="category" rules={[]}>
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
