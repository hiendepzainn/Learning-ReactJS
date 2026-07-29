import { Button, Form, Input } from "antd";

const RegisterPage = () => {
  const onFinishSuccess = (data) => {
    console.log("Success!, data:", data);
  };
  const onFinishFailed = (dataFailed) => {
    console.log("Failed, errorInfor:", dataFailed);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "25px 0px",
        }}
      >
        <div style={{ width: "97%" }}>
          <Form
            layout="vertical"
            onFinish={onFinishSuccess}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Full name"
              name="fullName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="phone"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
