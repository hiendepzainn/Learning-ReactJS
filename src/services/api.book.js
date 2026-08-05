import axios from "./axios.customize";

const getBooksPaginate = (current, pageSize) => {
  const url = `api/v1/book?current=${current}&pageSize=${pageSize}`;
  return axios.get(url);
};

const uploadThumbnail = (file) => {
  const url = `api/v1/file/upload`;
  const data = new FormData();
  data.append("fileImg", file);
  return axios.post(url, data, { headers: { "upload-type": "book" } });
};

const createNewBook = (
  thumbnail,
  mainText,
  author,
  price,
  quantity,
  category,
) => {
  const url = `api/v1/book`;
  const data = { thumbnail, mainText, author, price, quantity, category };
  return axios.post(url, data);
};

const updateBook = (
  id,
  thumbnail,
  mainText,
  author,
  price,
  quantity,
  category,
) => {
  const url = `api/v1/book`;
  const data = {
    _id: id,
    thumbnail,
    mainText,
    author,
    price,
    quantity,
    category,
  };
  return axios.put(url, data);
};

export { getBooksPaginate, uploadThumbnail, createNewBook, updateBook };
