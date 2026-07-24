import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { getAllUserAPI } from "../services/api.service";
import UpdateUserModel from "../components/user/update.user.modal";

const UserPage = () => {
  const [data, setData] = useState([]);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  const [updateID, setUpdateID] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");

  const setUpdateData = (id, name, phone) => {
    setUpdateID(id);
    setUpdateName(name);
    setUpdatePhone(phone);
  };

  const closeModalUpdate = () => {
    setIsModalUpdateOpen(false);
  };

  const openModalUpdate = () => {
    setIsModalUpdateOpen(true);
  };

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
        <UserTable
          data={data}
          openModalUpdate={openModalUpdate}
          setUpdateData={setUpdateData}
        />
        <UpdateUserModel
          isModalUpdateOpen={isModalUpdateOpen}
          closeModalUpdate={closeModalUpdate}
          updateID={updateID}
          updateName={updateName}
          updatePhone={updatePhone}
          setUpdateName={setUpdateName}
          setUpdatePhone={setUpdatePhone}
        />
      </div>
    </>
  );
};

export default UserPage;
