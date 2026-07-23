import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { getAllUserAPI } from "../../services/api.service";

const UserTable = () => {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await getAllUserAPI();
    setData(res.data);
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
    </>
  );
};

export default UserTable;
