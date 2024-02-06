import axios from "axios";
import URL from "../../utilis/Url";
import { config } from "../../utilis/axiosConfig";

const uploadImages = async (image) => {
  const response = await axios.post(
    `${URL.BASE_URL}upload/banner-upload`,
    image,config
  );

  if (response.data) {
    return response.data;
  }
};


const uploadProductImage = async(image)=>{
  const response = await axios.patch(`${URL.BASE_URL}upload/img-upload`,image,config)
  return response.data
}

const deleteImage=async(image)=>{
   const response=await axios.delete(`${URL.BASE_URL}upload/delete-product-image/${image}`,config)
   return response.data
}




const updloadImageService={
    uploadImages,
    uploadProductImage,
    deleteImage
}

export default updloadImageService;