import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { getAllUserAPI } from "../services/api.service";

const UserPage = () => {
  const [data, setData] = useState([]);

  const loadUser = async () => {
    const res = await getAllUserAPI();
    setData(res.data);
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <>
      <div>
        <UserForm loadUser={loadUser} />
        <UserTable data={data} />
      </div>
    </>
  );
};

export default UserPage;
