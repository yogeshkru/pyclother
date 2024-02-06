import axios from "axios";
import URL from "../../utilis/Url";
import { config } from "../../utilis/axiosConfig";

const eventCreate = async (data)=>{
    const response = await axios.post(`${URL.BASE_URL}event/event-create`,data,config)
    if(response.data){
        return response.data
    }
}


const getEvent =async()=>{
    const response = await axios.get(`${URL.BASE_URL}event/get-event`,config)
    if(response.data){
        return response.data
    }
}


const deleteEvent = async(id)=>{
    const response = await axios.delete(`${URL.BASE_URL}event/delete-event/${id}`,config);
    if(response.data){
        return response.data
    }
}

 const eventService ={

    eventCreate,
    getEvent,
    deleteEvent
 }

export default eventService