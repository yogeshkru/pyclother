import React, { useState } from 'react'
import ProfilSidebar from '../Component/profile/profileSidebar'
import ProfileContent from '../Component/profile/profileContent'


function Profile() {
const [active,setActive]=useState(1);

  return (
  
    <>
    <div className='w-11/12  d-flex bg-light py-10'>
          <div className='w-50 w-md-25 sticky-top mt-5'>
            <ProfilSidebar active={active} setActive={setActive}/>

          </div>
          <div className='w-100 w-md-75'>
            <ProfileContent active={active}/>

          </div>

    </div>
    
    </>
  )
}

export default Profile