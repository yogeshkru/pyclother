import axios from "axios";
import CONN from "../utils/Url";
import { config } from "../utils/axiosConfig";

//signup
const userRegister = async (userData) => {
  const response = await axios.post(
    `${CONN.BASE_URL}user/createUser`,
    userData
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//login
const userLogin = async (userData) => {
  const response = await axios.post(`${CONN.BASE_URL}user/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//forget
const userForget = async (userData) => {
  const response = await axios.post(`${CONN.BASE_URL}user/forgot`, userData);
  if (response.data) {
    return response.data;
  }
};

//reset

const userReset = async function (data) {
  const response = await axios.patch(
    `${CONN.BASE_URL}user/reset/${data.token}`,
    { password: data.password }
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const getAllUser = async function (data) {
  const response = await axios.get(`${CONN.BASE_URL}user/getall-user`);

  return response.data;
};

// **********************Authenticated User***********************//
// updateuser-auth
const userUpdate = async function (userdata) {
  const response = await axios.patch(`${CONN.BASE_URL}user/update-user`);
  if (response.data) {
    return response.data;
  }
};

const userdeleteme = async function (userdata) {
  const response = await axios.patch(`${CONN.BASE_URL}user/deleteme`);
  if (response.data) {
    return response.data;
  }
};

//getwishlist
const getwishlist = async function (userData) {
  const response = await axios.get(`${CONN.BASE_URL}user/getwishlist`);
  if (response.data) {
    return response.data;
  }
};

// addToCart

const addToUserCart = async function (data) {
  const response = await axios.post(
    `${CONN.BASE_URL}cart/createcart`,
    data,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const getUserCartProduct = async function () {
  const response = await axios.get(`${CONN.BASE_URL}cart/showtocart`, config);
  if (response.data) {
    return response.data;
  }
};

const userCartQuantity = async function (data) {

  const response = await axios.patch(
    `${CONN.BASE_URL}cart/update-cartitem/${data?.cartItemId}`,{newQuantity:data?.quantity},config );
  if (response.data) {
    return response.data;
  }
};

const userCartDelete = async function(id){
  const response = await axios.delete(`${CONN.BASE_URL}cart/deletefromcart/${id}`,config)
  if(response.data){
    return response.data
  }
}

const userDetails = {
  userRegister,
  userLogin,
  userForget,
  userReset,
  getAllUser,
  userCartDelete,
  userdeleteme,
  userUpdate,
  addToUserCart,
  getUserCartProduct,
  userCartQuantity,
};

export default userDetails;
