import axios from 'axios'
import URL from '../../utilis/Url'


// post

const Createenquiry=async(data)=>{
const response=await axios.post(`${URL.BASE_URL}enquiry/createEnquiry`,data)

if(response.data){
    return response.data
}

}

//get

const Getenquiry=async()=>{
    const response=await axios.get(`${URL.BASE_URL}enquiry/getEnquiry`)
    if(response.data){
        return response.data
    }
}

//getone

const GetoneEnquiry=async(data)=>{
    const response=await axios.get(`${URL.BASE_URL}enquiry/getOne/${data._id}`)
    if(response.data){
        return response.data
    }
}

// delete

const DeleteEnquiry=async(data)=>{
    const response=await axios.delete(`${URL.BASE_URL}enquiry/deleteEnquiry/${data._id}`)
    if(response.data){
        return response.data
    }
}

//patch

const Patchenquiry=async(data)=>{
    const response=await axios.patch(`${URL.BASE_URL}enquiry/updateEnquiry/${data._id}`,data)
    if(response.data){
        return response.data
    }
}

const Enquiries={
    Createenquiry,
    Getenquiry,
    GetoneEnquiry,
    Patchenquiry,
    DeleteEnquiry,
    Patchenquiry

}
export default Enquiries;