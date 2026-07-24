import { Input, Modal, notification } from "antd";
import { useState } from "react";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModel = (props) => {
  const {
    isModalUpdateOpen,
    closeModalUpdate,
    updateID,
    updateName,
    updatePhone,
    setUpdateName,
    setUpdatePhone,
    loadUser,
  } = props;

  const handleSave = async () => {
    const res = await updateUserAPI(updateID, updateName, updatePhone);
    if (res.data) {
      closeModalUpdate();
      notification.success({
        message: "Update user",
        description: "Cập nhật User thành công!",
      });
      await loadUser();
    } else {
      closeModalUpdate();
      notification.error({
        message: "Error",
        description: "Cập nhật User thất bại!",
      });
    }
  };
  return (
    <>
      <Modal
        title="Update User"
        open={isModalUpdateOpen}
        onCancel={closeModalUpdate}
        okText={"Save"}
        onOk={handleSave}
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
                    setUpdatePhone(e.target.value);
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
