import axios from "axios";
import URL from "../../utilis/Url";
import { config } from "../../utilis/axiosConfig";


const getTokenFromLocalStorage = localStorage.getItem("admin_user")
? JSON.parse(localStorage.getItem("admin_user"))
: null;


export const auth = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: getTokenFromLocalStorage
      ? `Bearer ${getTokenFromLocalStorage.token}`
      : null,
    Accept: "application/json",
  },
};
const categoryPost = async (userData) => {
  const response = await axios.post(
    `${URL.BASE_URL}category/create-category`,
    userData,
    auth
  );
  if (response.data) {
    return response.data;
  }
};

const categoryGet = async () => {
  const response = await axios.get(
    `${URL.BASE_URL}category/get-category`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const categoryPatch = async (data) => {
  const response = await axios.patch(
    `${URL.BASE_URL}category/patch-category/${data.id}`,
    data.categoryValue,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const categoryDelete = async (data) => {
  const response = await axios.delete(
    `${URL.BASE_URL}category/delete-category/${data}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const categoryFind = async (data) => {
  const response = await axios.patch(
    `${URL.BASE_URL}category/find-category/${data}`,
    data,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const categoryService = {
  categoryPost,
  categoryGet,
  categoryPatch,
  categoryDelete,
  categoryFind,
};

export default categoryService;
