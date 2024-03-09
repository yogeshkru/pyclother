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
const eventCreate = async (data) => {
  const response = await axios.post(
    `${URL.BASE_URL}banner/banners`,
    data,
    auth
  );
  if (response.data) {
    return response.data;
  }
};

const getEvent = async () => {
  const response = await axios.get(`${URL.BASE_URL}banner/banner-shop-get`, config);
  if (response.data) {
    return response.data;
  }
};

const getSuperEvent = async () => {
  const response = await axios.get(`${URL.BASE_URL}banner/banner-get`, config);
  if (response.data) {
    return response.data;
  }
};
const PatchSuperEvent = async (data) => {
  const response = await axios.patch(`${URL.BASE_URL}banner/banner-patch/${data.id}`,{status:data.input}, config);
  if (response.data) {
    return response.data;
  }
};

// const deleteEvent = async (id) => {
//   const response = await axios.delete(
//     `${URL.BASE_URL}event/delete-event/${id}`,
//     config
//   );
//   if (response.data) {
//     return response.data;
//   }
// };

// const bannerImage = async (image) => {
//   const response = await axios.post(
//     `${URL.BASE_URL}event/banner-image`,
//     { bannerImage: image },
//     config
//   );
// };

const eventService = {
  eventCreate,
  getEvent,
  PatchSuperEvent,
  getSuperEvent
};

export default eventService;
