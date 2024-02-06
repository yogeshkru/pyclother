import axios from "axios";
import URL from "../../utilis/Url";
import {config} from "../../utilis/axiosConfig";

//post 

const CreateGst = async(data)=>{
    const response = await axios.post(
        `${URL.BASE_URL}gst/create-gst`,
        data,config
    );
    if(response.data){
        return response.data
    };
}; 

//getAll

const getGst = async()=>{
    const response = await axios.get(
        `${URL.BASE_URL}gst/get-gst`,
        config
    );
    if(response.data){
        return response.data
    };
};

//getOne

const gstOneGst = async(data)=>{
    const response = await axios.get(
        `${URL.BASE_URL}gst/get-one-gst/${data}`,
        data,config
    );
    if(response.data){
        return response.data
    };
};

//delete

const deleteGst = async(data)=>{
    const response = await axios.delete(
        `${URL.BASE_URL}gst/delete-gst/${data}`,
        config
    );
    if(response.data){
        return response.data
    };
};

//update

const updateGst = async(data)=>{
    const response = await axios.patch(
        `${URL.BASE_URL}gst/update-gst/${data.id}`,
        data.gstValue,config
    );
    if(response.data){
        return response.data
    };
};


const Gst={
    CreateGst,
    getGst,
    gstOneGst,
    deleteGst,
    updateGst
};

export default Gst;