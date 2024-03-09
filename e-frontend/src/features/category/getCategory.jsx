import axios from "axios";
import URL from "../../utils/Url";




const categoryGet = async () => {
  const response = await axios.get(
    `${URL.BASE_URL}category/get-category-users`,

  );
  if (response.data) {
    return response.data;
  }
};





const categoryService = {

  categoryGet
 
};

export default categoryService;
