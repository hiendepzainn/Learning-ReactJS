import { Input, Modal } from "antd";
import { useState } from "react";

const UpdateUserModel = (props) => {
  const {
    isModalUpdateOpen,
    closeModalUpdate,
    updateID,
    updateName,
    updatePhone,
    setUpdateName,
    setUpdatePhone,
  } = props;
  return (
    <>
      <Modal
        title="Update User"
        open={isModalUpdateOpen}
        onCancel={closeModalUpdate}
        okText={"Save"}
      >
        <div style={{ width: "97%" }}>
          <div>
            <div style={{ marginBottom: "10px" }}>
              <div>ID</div>
              <div>
                <Input disabled={true} value={updateID} />
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div>Full Name</div>
              <div>
                <Input
                  value={updateName}
                  onChange={(e) => {
                    setUpdateName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div>Phone number</div>
              <div>
                <Input
                  value={updatePhone}
                  onChange={(e) => {
                    updatePhone(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateUserModel;
