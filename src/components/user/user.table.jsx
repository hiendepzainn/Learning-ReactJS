import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";

const UserTable = (props) => {
  const { data, loadUser } = props;

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
