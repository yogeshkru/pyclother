import React from "react";
import { Button, Result } from 'antd';
import {useNavigate} from "react-router-dom"
function Pagenotfound() {
    const navigate=useNavigate()
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button style={{backgroundColor:"#df0067",color:"white"}} onClick={()=>navigate("/")}>Back Home</Button>}
      />
    </div>
  );
}

export default Pagenotfound;
