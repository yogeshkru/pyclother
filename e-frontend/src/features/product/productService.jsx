import axios from "axios";
import URL from "../../utils/Url"

const getProduct =async()=>{

  const response = await axios.get(`${URL.BASE_URL}product/getall-product`)
    
  if(response.data){
    return response.data
  }
}

const getOneProduct=async function(id){

    const response = await axios.get(`${URL.BASE_URL}product/product-id/${id}`);
    
    if(response.data){
        return response.data

    }
}

const productService = {
    getOneProduct,
    getProduct
}

export default productService;