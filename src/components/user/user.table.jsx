import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";

const UserTable = (props) => {
  const { data, openModalUpdate, setUpdateData } = props;

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
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
    </>
  );
};

export default UserTable;
