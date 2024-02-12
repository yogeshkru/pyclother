import axios from "axios";
import URL from "../../utils/Url";

const getProduct = async (data) => {
  try {
    const queryParams = new URLSearchParams();

    if (data?.brand) {
      queryParams.append("brand", data?.brand);
    }

    if (data?.price) {
      queryParams.append(`price`,data?.price)
    }

    if (data?.color) {
      queryParams.append(`color`, data?.color); // Append 'sort' parameter with color value
  }

    if (data?.category) {
      queryParams.append("category", data?.category);
    }
    const response = await axios.get(
      `${URL.BASE_URL}product/getall-product?${queryParams}`
    );

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw new Error(error);
  }

  if (response.data) {
    return response.data;
  }
};

const getOneProduct = async function (id) {
  const response = await axios.get(`${URL.BASE_URL}product/product-id/${id}`);

  if (response.data) {
    return response.data;
  }
};

const productService = {
  getOneProduct,
  getProduct,
};

export default productService;
