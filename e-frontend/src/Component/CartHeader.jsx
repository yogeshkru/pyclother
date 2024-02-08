
import "../app.css"
import secure from '../assets/image/secure.jpeg'
import secured from '../assets/image/secured.png'
export const Cartheader = () => {

  

  return (
    <div className='d-flex justify-content-around overflow-hidden mt-5'>
      <div className='Cartheader-inner d-flex'>

        <p className="car">Bag</p>
        <div className="Cartheader-line"></div>
        <p className="car">Delivery Details</p>
        <div className="Cartheader-line"></div>
        <p className="car">Payment</p>

      </div>
      <div className="sider d-flex ">
        <img className="secure mx-2" src={secure} alt="secure" width='30px' height='30px' />
        <p className="m">100% secure payment</p>
      </div>
    </div>
  );
};
