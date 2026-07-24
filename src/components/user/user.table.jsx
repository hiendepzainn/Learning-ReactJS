import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Drawer, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";

const UserTable = (props) => {
  const { data, openModalUpdate, setUpdateData } = props;
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
          <DeleteTwoTone twoToneColor="#DB0000" style={{ cursor: "pointer" }} />
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
