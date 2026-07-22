import { Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    const url = `http://localhost:8080/api/v1/user`;
    const data = {
      fullName: name,
      email: email,
      password: password,
      phone: phone,
    };
    axios.post(url, data);
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
