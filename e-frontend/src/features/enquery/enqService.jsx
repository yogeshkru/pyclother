 
import { config } from "../../utils/axiosConfig";
import axios from "axios"
import URL from "../../utils/Url";




const Createenquiry = async (data) => {
    const response = await axios.post(
      `${URL.BASE_URL}enquiry/createEnquiry`,
      data
    );
  
    if (response.data) {
      return response.data;
    }
  };
  


  const queryService={
    Createenquiry
  }

  export default queryService