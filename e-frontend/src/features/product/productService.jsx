import axios from "axios";
import URL from "../../utils/Url";
import { config } from "../../utils/axiosConfig";



const getProduct = async (data) => {
  try {
    const queryParams = new URLSearchParams();

    if (data?.brand) {
      queryParams.append("brand",data?.brand);
    }

    if (data?.price) {
      queryParams.append(`price`,data?.price)
    }

    if (data?.color) {
      queryParams.append(`color`,data?.color); 
  }

    if (data?.category) {
      queryParams.append("category",data?.category);
    }


    const searchFields = [
      "name",
      // "description",
      // "length",
      // "fabric",
      // "fit",
      // "neck",
      // "sleeve",
      // "size",
    ];

    if (data?.searchTerm) {
      searchFields.forEach((field) => {
        queryParams.append(field, data.searchTerm);
      });
    }


    const response = await axios.get(
      `${URL.BASE_URL}product/getall-product?${queryParams.toString()}`
    );

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }


};

const getOneProductServer = async function (id) {
  const response = await axios.get(`${URL.BASE_URL}product/product-id/${id}`);

  if (response.data) {
    return response.data;
  }
};

const Ratings=async function(data){
   const response=await axios.post(`${URL.BASE_URL}product/ratings`,data,config)
   return response.data
}

const productService = {
  getOneProductServer,
  getProduct,
  Ratings
};

export default productService;
