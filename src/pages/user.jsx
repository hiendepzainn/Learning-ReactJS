import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { getUserPagination } from "../services/api.service";
import UpdateUserModel from "../components/user/update.user.modal";

const UserPage = () => {
  const [data, setData] = useState([]);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [page, setPage] = useState(1);
  const pageSizeDefault = 5;
  const [total, setTotal] = useState(0);

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

  const loadUser = async (page, pageSize) => {
    const res = await getUserPagination(page, pageSize);
    setData(res.data.result);
    setTotal(res.data.meta.total);
  };

  useEffect(() => {
    loadUser(page, pageSizeDefault);
  }, []);
  return (
    <>
      <div>
        <UserForm
          loadUser={loadUser}
          page={page}
          pageSizeDefault={pageSizeDefault}
        />
        <UserTable
          data={data}
          openModalUpdate={openModalUpdate}
          setUpdateData={setUpdateData}
          loadUser={loadUser}
          pageSizeDefault={pageSizeDefault}
          page={page}
          setPage={setPage}
          total={total}
        />
        <UpdateUserModel
          isModalUpdateOpen={isModalUpdateOpen}
          closeModalUpdate={closeModalUpdate}
          updateID={updateID}
          updateName={updateName}
          updatePhone={updatePhone}
          setUpdateName={setUpdateName}
          setUpdatePhone={setUpdatePhone}
          loadUser={loadUser}
          page={page}
          pageSizeDefault={pageSizeDefault}
        />
      </div>
    </>
  );
};

export default UserPage;
