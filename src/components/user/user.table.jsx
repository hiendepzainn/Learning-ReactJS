import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button, Drawer, notification, Popconfirm, Table } from "antd";
import { useState } from "react";
import {
  deleteUserAPI,
  updateUserWithAvatarAPI,
  uploadFileAPI,
} from "../../services/api.service";

const UserTable = (props) => {
  const { data, openModalUpdate, setUpdateData, loadUser } = props;
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const [idDrawer, setIdDrawer] = useState("");
  const [nameDrawer, setNameDrawer] = useState("");
  const [emailDrawer, setEmailDrawer] = useState("");
  const [phoneDrawer, setPhoneDrawer] = useState("");
  const [avatar, setAvatar] = useState("");

  const [file, setFile] = useState(null);
  const [urlPreview, setUrlPreview] = useState("");

  const handleClickID = (record) => {
    setIdDrawer(record._id);
    setNameDrawer(record.fullName);
    setEmailDrawer(record.email);
    setPhoneDrawer(record.phone);
    setAvatar(record.avatar);

    setIsOpenDrawer(true);
  };

  const handleDelete = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "Delete user",
        description: "Xóa User thành công!",
      });
      await loadUser();
    } else {
      notification.error({
        message: "Error",
        description: JSON.stringify(res.message),
      });
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (value, record) => {
        return <a onClick={() => handleClickID(record)}>{value}</a>;
      },
    },
    {
      title: "Full name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      // width: 100,
      render: (_, record) => (
        <div>
          <EditTwoTone
            twoToneColor="#F28705"
            style={{ marginRight: "15px", cursor: "pointer" }}
            onClick={() => {
              openModalUpdate();
              setUpdateData(record._id, record.fullName, record.phone);
            }}
          />
          <Popconfirm
            placement="left"
            title="Xóa người dùng"
            description="Bạn chắc chắn xóa User này?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteTwoTone
              twoToneColor="#DB0000"
              style={{ cursor: "pointer" }}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleChangeFile = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    const url = URL.createObjectURL(newFile);
    setUrlPreview(url);
  };

  const handleSave = async () => {
    console.log(file);
    const res1 = await uploadFileAPI(file);
    const fileNameAvatar = res1.data.fileUploaded;
    const res2 = await updateUserWithAvatarAPI(
      idDrawer,
      nameDrawer,
      phoneDrawer,
      fileNameAvatar,
    );

    if (res2.data) {
      setIsOpenDrawer(false);
      notification.success({
        message: "Update Avatar",
        description: "Cập nhật Avatar thành công!",
      });
      setUrlPreview("");
      loadUser();
    } else {
      setIsOpenDrawer(false);
      notification.error({
        message: "Error",
        description: "Cập nhật Avatar thất bại!",
      });
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table
          style={{ width: "97vw" }}
          columns={columns}
          dataSource={data}
          rowKey={"_id"}
        />
      </div>
      <Drawer
        title="Chi tiết User"
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      >
        <p style={{ marginBottom: "7px" }}>ID: {idDrawer}</p>
        <p style={{ marginBottom: "7px" }}>Full name: {nameDrawer}</p>
        <p style={{ marginBottom: "7px" }}>Email: {emailDrawer}</p>
        <p style={{ marginBottom: "7px" }}>Phone number: {phoneDrawer}</p>
        <p style={{ marginBottom: "7px" }}>Avatar:</p>
        <img
          style={{
            width: "30%",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
          src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${avatar}`}
          alt="avatar"
        />
        <br />
        <label
          style={{
            background: "#f19c52",
            padding: "5px 10px",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
          }}
          htmlFor="fileInput"
        >
          Upload Avatar
        </label>
        <input hidden id="fileInput" type="file" onChange={handleChangeFile} />
        {urlPreview == "" ? (
          <></>
        ) : (
          <div style={{ marginTop: "15px" }}>
            <p style={{ marginBottom: "5px" }}>New avatar preview:</p>
            <img
              style={{
                width: "30%",
                border: "1px solid #ccc",
                marginBottom: "5px",
              }}
              src={urlPreview}
              alt="avatar"
            />
            <br />
            <Button type="primary" onClick={handleSave}>
              Save
            </Button>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default UserTable;
