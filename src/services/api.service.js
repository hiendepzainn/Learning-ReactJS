import axios from "./axios.customize";

const createUserAPI = (name, email, password, phone) => {
  const url = `/api/v1/user`;
  const data = {
    fullName: name,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(url, data);
};

const getAllUserAPI = () => {
  const url = `/api/v1/user`;
  return axios.get(url);
};

const updateUserAPI = (id, name, phone) => {
  const url = `/api/v1/user`;
  const data = {
    _id: id,
    fullName: name,
    phone: phone,
  };
  return axios.put(url, data);
};

const deleteUserAPI = (id) => {
  const url = `/api/v1/user/${id}`;
  return axios.delete(url);
};

export { createUserAPI, updateUserAPI, getAllUserAPI, deleteUserAPI };
