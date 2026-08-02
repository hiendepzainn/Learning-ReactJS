import axios from "./axios.customize";

const getBooksPaginate = (current, pageSize) => {
  const url = `api/v1/book?current=${current}&pageSize=${pageSize}`;
  return axios.get(url);
};

export { getBooksPaginate };
