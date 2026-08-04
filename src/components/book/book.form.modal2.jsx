import { Form, Input, Modal } from "antd";

const FormModalUnControl = (props) => {
  const { isModalOpen, setIsModelOpen } = props;

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModelOpen(false);
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
        <Form layout="vertical">
          <Form.Item label="Tiêu đề" name="mainText">
            <Input />
          </Form.Item>
          <Form.Item label="Tác giả" name="author">
            <Input />
          </Form.Item>
          <Form.Item label="Giá tiền" name="price">
            <Input />
          </Form.Item>
          <Form.Item label="Số lượng" name="quantity">
            <Input />
          </Form.Item>
          <Form.Item label="Thể loại" name="category">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default FormModalUnControl;
