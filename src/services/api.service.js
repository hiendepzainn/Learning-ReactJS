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

const updateUserAPI = () => {};

export { createUserAPI, updateUserAPI, getAllUserAPI };
