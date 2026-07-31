import { Button, Col, Form, Input, message, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAPI } from "../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../Goat";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const onFinish = async (data) => {
    setIsLoading(true);

    const res = await loginUserAPI(data.username, data.password);

    if (res.data) {
      message.success("Login success!");
      setUser(res.data.user);
      localStorage.setItem("access_token", res.data.access_token);
      navigate("/");
    } else {
      message.error("Login failed!");
      setIsLoading(false);
    }
  };

  const onFinishFailed = (error) => {
    console.log("Failed, error:", error);
  };
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
            <Form
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <h3 style={{ textAlign: "center" }}>Đăng nhập</h3>
              <Form.Item
                label="Email"
                name="username"
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
                <Button type="primary" htmlType="submit" loading={isLoading}>
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
