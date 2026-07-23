import { Button, Input, Modal, notification } from "antd";
import axios from "axios";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetValue = () => {
    setEmail("");
    setName("");
    setPassword("");
    setPhone("");
  };

  const handleOk = async () => {
    const res = await createUserAPI(name, email, password, phone);
    if (res.data) {
      notification.success({
        message: "create user",
        description: "Tạo mới User thành công!",
      });
      resetValue();
    } else {
      notification.error({
        message: "Error",
        description: JSON.stringify(res.message),
      });
    }

    console.log("Response:", res);
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
        <div
          style={{
            width: "97vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Table Users</h2>
          <Button type="primary" onClick={showModal}>
            Create User
          </Button>
          <Modal
            title="Create User"
            closable={{ "aria-label": "Custom Close Button" }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            okText="Create"
          >
            <div style={{ width: "97%" }}>
              <div>
                <div style={{ marginBottom: "10px" }}>
                  <div>Full name</div>
                  <div>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
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
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default UserForm;
