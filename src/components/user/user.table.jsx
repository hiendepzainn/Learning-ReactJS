import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Drawer, notification, Popconfirm, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {
  const { data, openModalUpdate, setUpdateData, loadUser } = props;
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const [idDrawer, setIdDrawer] = useState("");
  const [nameDrawer, setNameDrawer] = useState("");
  const [emailDrawer, setEmailDrawer] = useState("");
  const [phoneDrawer, setPhoneDrawer] = useState("");

  const handleClickID = (record) => {
    setIdDrawer(record._id);
    setNameDrawer(record.fullName);
    setEmailDrawer(record.email);
    setPhoneDrawer(record.phone);

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
        <p>Phone number: {phoneDrawer}</p>
      </Drawer>
    </>
  );
};

export default UserTable;
