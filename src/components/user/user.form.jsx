import { Button, Input, notification } from "antd";
import axios from "axios";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = async () => {
    const res = await createUserAPI(name, email, password, phone);
    if (res.data) {
      notification.success({
        message: "create user",
        description: "Tạo mới User thành công!",
      });
    } else {
      notification.error({
        message: "Error",
        description: JSON.stringify(res.message),
      });
    }

    console.log("Response:", res);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0px",
        }}
      >
        <div style={{ width: "97vw" }}>
          <div>
            <div style={{ marginBottom: "12px" }}>
              <div>Full name</div>
              <div>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div>Email</div>
              <div>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div>Password</div>
              <div>
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div>Phone number</div>
              <div>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <Button type="primary" onClick={handleClick}>
              Create User
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
