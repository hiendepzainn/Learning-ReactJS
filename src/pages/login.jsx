import { Button, Col, Form, Input, Row } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Row justify="center">
        <Col xs={22} sm={16} md={12} lg={10} xl={8}>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "13px",
              borderRadius: "7px",
              marginTop: "50px",
            }}
          >
            <Form layout="vertical">
              <h3 style={{ textAlign: "center" }}>Đăng nhập</h3>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập email" },
                  { type: "email", message: "Email không đúng định dạng" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
                <Link to="/">Go to homepage ⭢</Link>
              </div>
              <hr style={{ margin: "20px 0px", opacity: "30%" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>
                  Chưa có tài khoản? <Link to="/register">Đăng ký tại đây</Link>
                </span>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
