import { Button, Input } from "antd";

const UserForm = () => {
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
                <Input />
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div>Email</div>
              <div>
                <Input />
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div>Password</div>
              <div>
                <Input.Password />
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div>Phone number</div>
              <div>
                <Input />
              </div>
            </div>
          </div>
          <div>
            <Button type="primary">Create User</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
