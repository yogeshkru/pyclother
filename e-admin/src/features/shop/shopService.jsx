import axios from "axios";
import URL from "../../utilis/Url";

//CREATE ==>SHOP
const createShop = async (data) => {
  const response = await axios.post(`${URL.BASE_URL}shop/create-shop`, data);

  if (response.data) {
    return response.data;
  }
};

//LOGIN ==> SHOP

const loginShop = async (data) => {
  const response = await axios.post(`${URL.BASE_URL}shop/login-shop`, data);

  if (response.data) {
    return response.data;
  }
};

// FORGOT-PASSWORD ==> SHOP

const forgetPassShop = async (data) => {
  const response = await axios.post(
    `${URL.BASE_URL}shop/update-shop-forgot`,
    data
  );
  if (response.data) {
    return response.data;
  }
};

// RESET-PASSWORD ==> SHOP

const resetPassword = async (token) => {
  const response = await axios.patch(`${URL.BASE_URL}shop/patch-shop/${token}`);
  if (response.data) {
    return response.data;
  }
};

// ********************Authendicate Shop *******************//

// UPDATE-DETAILS ==>SHOP
async function updateDetailsShop(data) {
  const response = await axios.patch(`${URL.BASE_URL}shop/update-shop`, data);
  if (response.data) {
    return response.data;
  }
}

//UPDATE-AUTHPASSWORD  ==> SHOP

async function updateShopPassword(data) {
  const response = await axios.patch(
    `${URL.BASE_URL}shop/update-shopassword`,
    data
  );

  if (response.data) {
    return response.data;
  }
}

// DELETE-AUTHShOP ==> SHOP

async function deleteAuthShop() {
  const response = await axios.delete(`${URL.BASE_URL}shop/delete-shop`);
  if (response.data) {
    return response.data;
  }
}

const shopService = {
  createShop,
  loginShop,
  forgetPassShop,
  resetPassword,
  //auth
  updateDetailsShop,
  updateShopPassword,
  deleteAuthShop,
};

export default shopService;
