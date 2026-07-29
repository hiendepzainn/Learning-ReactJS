import { Button, Col, Form, Input, notification, Row } from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const onFinishSuccess = async (data) => {
    const res = await registerUserAPI(
      data.fullName,
      data.email,
      data.password,
      data.phone,
    );

    if (res.data) {
      notification.success({
        message: "Register user",
        description: "Đăng ký User thành công!",
      });

      navigate("/login");
    } else {
      notification.error({
        message: "Error",
        description: JSON.stringify(res.message),
      });
    }
  };

  const onFinishFailed = (dataFailed) => {
    console.log("Failed, errorInfor:", dataFailed);
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
              layout="vertical"
              onFinish={onFinishSuccess}
              onFinishFailed={onFinishFailed}
            >
              <h3 style={{ textAlign: "center" }}>Đăng ký tài khoản</h3>
              <Form.Item
                label="Full name"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ và tên",
                  },
                  {
                    validator: (_, value) => {
                      if (!value) return Promise.resolve();

                      if (/\d/.test(value)) {
                        return Promise.reject(
                          new Error("Họ và tên không được chứa chữ số"),
                        );
                      }

                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input />
              </Form.Item>
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
                  {
                    validator: (_, value) => {
                      if (!value) return Promise.resolve();

                      if (value.length < 6) {
                        return Promise.reject(
                          new Error("Mật khẩu phải có ít nhất 6 ký tự"),
                        );
                      }

                      if (value.length > 20) {
                        return Promise.reject(
                          new Error("Mật khẩu không được quá 20 ký tự"),
                        );
                      }

                      if (!/[a-z]/.test(value)) {
                        return Promise.reject(
                          new Error("Mật khẩu phải chứa ít nhất 1 chữ thường"),
                        );
                      }

                      if (!/[A-Z]/.test(value)) {
                        return Promise.reject(
                          new Error("Mật khẩu phải chứa ít nhất 1 chữ hoa"),
                        );
                      }

                      if (!/\d/.test(value)) {
                        return Promise.reject(
                          new Error("Mật khẩu phải chứa ít nhất 1 chữ số"),
                        );
                      }

                      if (
                        !/[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(value)
                      ) {
                        return Promise.reject(
                          new Error(
                            "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt",
                          ),
                        );
                      }

                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input.Password maxLength={20} />
              </Form.Item>
              <Form.Item
                label="Phone number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại",
                  },
                  {
                    validator: (_, value) => {
                      if (!value) return Promise.resolve();

                      if (/\s/.test(value)) {
                        return Promise.reject(
                          new Error(
                            "Số điện thoại không được chứa khoảng trắng",
                          ),
                        );
                      }

                      if (!/^\d+$/.test(value)) {
                        return Promise.reject(
                          new Error("Số điện thoại chỉ được chứa chữ số"),
                        );
                      }

                      if (value.length !== 10) {
                        return Promise.reject(
                          new Error("Số điện thoại phải có đúng 10 chữ số"),
                        );
                      }

                      if (!/^(03|05|07|08|09)/.test(value)) {
                        return Promise.reject(
                          new Error(
                            "Số điện thoại phải bắt đầu bằng 03, 05, 07, 08 hoặc 09",
                          ),
                        );
                      }

                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input maxLength={10} />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              <hr style={{ margin: "20px 0px", opacity: "30%" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>
                  Đã có tài khoản? <Link to="/login">Đăng nhập tại đây</Link>
                </span>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default RegisterPage;
