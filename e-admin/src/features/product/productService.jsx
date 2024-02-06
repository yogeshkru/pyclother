import axios from "axios";
import URL from "../../utilis/Url";
import { config } from "../../utilis/axiosConfig";

// normal product
//post

const productPost = async (productData) => {
  const response = await axios.post(
    `${URL.BASE_URL}product/create-product`,
    productData,config
  );

  if (response.data) {
    return response.data;
  }
};

//get

const productGetAll = async function () {
  const response = await axios.get(`${URL.BASE_URL}product/getall-product`);
  if (response.data) {
    return response.data;
  }
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
    `${URL.BASE_URL}product/update-product/${data}`,
    data
  );

  if (response.data) {
    return response.data;
  }
};

//delete

const productDelete = async function (data) {
  const response = await axios.delete(`${URL.BASE_URL}product/delete/${data}`);
  if (response.data) {
    return response.data;
  }
};

const productService = {
  productDelete,
  productGetAll,
  productOne,
  productPost,
  productUpdate,
};

export default productService;
