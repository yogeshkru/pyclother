import axios from "axios";
import URL from "../../utilis/Url";
import { config } from "../../utilis/axiosConfig";
// normal product
//post

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

const productPost = async (productData) => {
  const response = await axios.post(
    `${URL.BASE_URL}product/create-product`,
    productData,
    auth
  );

  if (response.data) {
    return response.data;
  }
};

//get

const productGetAll = async function () {
  const response = await axios.get(
    `${URL.BASE_URL}product/getall-product`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const getAllShop = async () => {
  const response = await axios.get(
    `${URL.BASE_URL}product/getshop-product`,
    config
  );
  return response.data;
};

const productOne = async (data) => {
  const response = await axios.get(`${URL.BASE_URL}product/product-id/${data}`);
  if (response.data) {
    return response.data;
  }
};

// **********************Authorized Route's*******************************
//patch
const productUpdate = async function (data) {
  const response = await axios.patch(
    `${URL.BASE_URL}product/update-product/${data.id}`,
    data,
    auth
  );

  if (response.data) {
    return response.data;
  }
};

//delete

const productDelete = async function (data) {
  const response = await axios.delete(
    `${URL.BASE_URL}product/delete/${data}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};
//delete image when update

const deleteOnlyImage = async function (data) {
  const response = await axios.post(
    `${URL.BASE_URL}product/deleteImage`,
    data
  );
  if (response.data) {
    return response.data;
  }
};


//Update image when update

const uploadImageUpdate = async function (data) {
  const response = await axios.patch(
    `${URL.BASE_URL}product/deleteImage`,
    data
  );
  if (response.data) {
    return response.data;
  }
};

const productService = {
  productDelete,
  productGetAll,
  productOne,
  deleteOnlyImage,
  productPost,
  productUpdate,
  getAllShop,
};

export default productService;
