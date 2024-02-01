import axios from "axios";
import URL from "../../utilis/Url";
import {config} from "../../utilis/axiosConfig"
//colorcreate
const colorCreate = async (userData) => {
  const response = await axios.post(`${URL.BASE_URL}color/colors`, userData,config);
  if (response.data) {
    return response.data;
  }
};

//GET
const colorGet = async () => {
  const response = await axios.get(`${URL.BASE_URL}color/colorget`,config);
  if (response.data) {
    return response.data;
  }
};

//patch
const colorPatch = async (userData) => {
  const response = await axios.patch(
    `${URL.BASE_URL}color/colorUpdates/${userData.id}`,
    userData.colorValue,config
  );
  if (response.data) {
    return response.data;
  }
};

//delete

const colordelete = async (userData) => {
  const response = await axios.delete(
    `${URL.BASE_URL}color/colorDelete/${userData}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const colorfind = async (userData) => {
  const response = await axios.get(
    `${URL.BASE_URL}color/colorFind/${userData}`
  );
  if (response.data) {
    return response.data;
  }
};

const colordata = {
  colorCreate,
  colorGet,
  colordelete,
  colorPatch,
  colorfind,
};

export default colordata;
