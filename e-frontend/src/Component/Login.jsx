import React from 'react';

function Login() {
  return (
 <div className='background pt-5 pb-5 '>
     <div className="card justify-content m-auto logcard  pb-3 " style={{ width: '22rem' }}>

<div className="card-body kanit-font ">
  <div className='head'>
    <h5 className="card-title text-center pt-3">Welcome  </h5>
    <h5 className="card-title text-center">to </h5>

    <img className='justify-content m-auto d-flex' src="/src/assets/image/logo12.png" width="50%" />

  </div> 
  <p className='pt-5 mx-4 login pb-2'><span className='login'>Login</span><span className='text-secondary'> or</span> <span className='singup'>Singup</span></p>
  <div class="mb-3 body">

<input type="tel" class="form-control text-secondary logmob" id="mobile" placeholder="+91 | Mobile Number" maxlength="10" />

<p className='continue pt-3 text-secondary'>By continuing, I agree to the <span className='terms'>Terms of use</span> & <span className='terms'>Privacy policy</span></p>
<button className='logcont justify-content m-auto mx-3'>Continue</button>
<p className='continue pt-3 text-secondary  text-start  mx-4 pb-5 mb-5'>Having trouble while logging in?<span className='help'>Get Help</span> </p>


</div>
</div>
</div>

 </div>
  );
}

export default Login;
