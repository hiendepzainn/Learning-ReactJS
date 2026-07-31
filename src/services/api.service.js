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

const updateUserWithAvatarAPI = (id, name, phone, avatar) => {
  const url = `/api/v1/user`;
  const data = {
    _id: id,
    fullName: name,
    phone: phone,
    avatar: avatar,
  };
  return axios.put(url, data);
};

const deleteUserAPI = (id) => {
  const url = `/api/v1/user/${id}`;
  return axios.delete(url);
};

const uploadFileAPI = (file) => {
  const url = `/api/v1/file/upload`;
  const formData = new FormData();
  formData.append("fileImg", file);

  return axios.post(url, formData, {
    headers: {
      "upload-type": "avatar",
    },
  });
};

const getUserPagination = (page, pageSize) => {
  const url = `/api/v1/user?current=${page}&pageSize=${pageSize}`;

  return axios.get(url);
};

const registerUserAPI = (name, email, password, phone) => {
  const url = `/api/v1/user/register`;
  const data = {
    fullName: name,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(url, data);
};

const loginUserAPI = (username, password) => {
  const url = `/api/v1/auth/login`;
  const data = {
    username: username,
    password: password,
    delay: 1500,
  };
  return axios.post(url, data);
};

const getAccountAPI = () => {
  const url = `/api/v1/auth/account`;
  return axios.get(url);
};

export {
  createUserAPI,
  updateUserAPI,
  getAllUserAPI,
  deleteUserAPI,
  uploadFileAPI,
  updateUserWithAvatarAPI,
  getUserPagination,
  registerUserAPI,
  loginUserAPI,
  getAccountAPI,
};
