import axios from "axios";
import URL from "../../utilis/Url";
import {config} from "../../utilis/axiosConfig"

// create-user ===> POST

const createsuperAdminUser = async (user) => {
  const response = await axios.post(`${URL.BASE_URL}user/createUser`, user);

  if (response.data) {
    return response.data;
  }
};

// login-user ==> POST

const loginsuperAdminUser = async (user) => {
  const response = await axios.post(`${URL.BASE_URL}user/login`, user);
  if (response.data) {
    return response.data;
  }
};

// forgot-user ==> POST

const forgotsuperAdminUser = async (user) => {
  const response = await axios.post(`${URL.BASE_URL}user/forgot`, user);
  if (response.data) {
    return response.data;
  }
};

//reset-password ==>PATCH

const resetsuperAdminPassword = async (token) => {
  const response = await axios.patch(`${URL.BASE_URL}user/reset/${token}`);
  if (response.data) {
    return response.data;
  }
};

// *************************Authenticate Route's **************************

const updatesuperAdminUser = async function (data) {
  const response = await axios.patch(`${URL.BASE_URL}user/update-user/`, data);
  if (response.data) {
    return response.data;
  }
};

const deletesuperAdminUser = async function () {
  const response = await axios.delete(`${URL.BASE_URL}user/deleteme`);
  if (response.data) {
    return response.data;
  }
};

const updatesuperAdminAuthPassword = async function (data) {
  const response = await axios.patch(`${URL.BASE_URL}user/updatePassword`);
  if (response.data) {
    return response.data;
  }
};

// ************************Authorized Routes's (User's Routes <BACKEND>)***************************

// get-user ==>GET

async function getUser(id) {
  const response = await axios.get(`${URL.BASE_URL}user/getuser/${id}`);
  if (response.data) {
    return response.data;
  }
}

//block-user ==> PATCH

async function blockUser(id) {
  const response = await axios.patch(`${URL.BASE_URL}user/block-user/${id}`);
  if (response.data) {
    return response.data;
  }
}

// unblock-user ==> PATCH

async function unblockUser(id) {
  const response = await axios.patch(`${URL.BASE_URL}user/unblock-user/${id}`);
  if (response.data) {
    return response.data;
  }
}
// delete-user ==>DELETE
async function deleteUser(id) {
  const response = await axios.delete(`${URL.BASE_URL}user/deleteuser/${id}`);
  if (response.data) {
    return response.data;
  }
}

//get-user's ==>GET

async function getUsers() {
  const response = await axios.get(`${URL.BASE_URL}user/fetchUser`,config);
  if (response.data) {
    return response.data;
  }
}

// ********************Authorized Routes's(Admin Routes <BACKEND>)******************

const createAdminWorker = async (data) => {
  const response = await axios.post(`${URL.BASE_URL}admin/createuser`, data);
  if (response.data) {
    return response.data;
  }
};
const getAllAdminWorker = async () => {
  const response = await axios.post(`${URL.BASE_URL}admin/getalluser`);
  if (response.data) {
    return response.data;
  }
};

const getAdminWorker = async (id) => {
  const response = await axios.get(`${URL.BASE_URL}admin/getuser/${id}`);
  if (response.data) {
    return response.data;
  }
};

const blockAdminWorkder = async (id) => {
  const response = await axios.patch(`${URL.BASE_URL}admin/block-user/${id}`);
  if (response.data) {
    return response.data;
  }
};

const unblockAdminWorker = async (id) => {
  const response = await axios.patch(`${URL.BASE_URL}admin/unblock/${id}`);
  if (response.data) {
    return response.data;
  }
};

// ********************* Authorized Routes's(shop Routes <BACKEND>) *********************

const allShop = async function () {
  const response = await axios.get(`${URL.BASE_URL}shop/fetch-all`);
  if (response.data) {
    return response.data;
  }
};

const unblockShop = async function (id) {
  const response = await axios.patch(`${URL.BASE_URL}shop/unblock-shop/${id}`);

  if (response.data) {
    return response.data;
  }
};
const blockShop = async function (id) {
  const response = await axios.patch(`${URL.BASE_URL}shop/block-shop/${id}`);
  if (response.data) {
    return response.data;
  }
};

const getShop = async function (id) {
  const response = await axios.get(`${URL.BASE_URL}shop/get-shop/${id}`);
  if (response.data) {
    return response.data;
  }
};

const superAdminService = {
  createsuperAdminUser,
  loginsuperAdminUser,
  forgotsuperAdminUser,
  resetsuperAdminPassword,
  // ********Authendicate***********
  updatesuperAdminUser,
  deletesuperAdminUser,
  updatesuperAdminAuthPassword,
  //   *********Authorized *********
  getUser,
  blockUser,
  unblockUser,
  deleteUser,
  getUsers,
  createAdminWorker,
  getAllAdminWorker,
  getAdminWorker,
  blockAdminWorkder,
  unblockAdminWorker,
  allShop,
  unblockShop,
  blockShop,
  getShop,
};

export default superAdminService;
