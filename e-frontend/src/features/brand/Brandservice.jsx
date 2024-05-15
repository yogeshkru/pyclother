import axios from "axios";
import { config } from "../../utils/axiosConfig";
import URL from "../../utils/Url";

const brandGet = async () => {
  const response = await axios.get(`${URL.BASE_URL}brand/allbrands`, config);
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


//Branner
const getEvent = async () => {
  const response = await axios.get(`${URL.BASE_URL}banner/banner-user-get`, config);
  if (response.data) {
    return response.data;
  }
};

const getAllBrand = {
  brandGet,
  categoryGet,
  getEvent
};
export default getAllBrand;
