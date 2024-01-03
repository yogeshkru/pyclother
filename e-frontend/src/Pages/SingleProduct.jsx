import React, { useState } from 'react';
import '../styles/SingleProduct.css';
import { TbShoppingBag } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import moneyBlue from '../assets/image/money_blue.jpeg';
import bruno from '../assets/image/bruno.jpeg'

const productData = {
  id: 3,
  title: "Mens colloect jacket",
  price: "$ 55.8",
  desciption: "great outerwer jackets",
  images: [
    moneyBlue,
    bruno,

  ],
  rating: 3.5,
};

function SingleProduct() {

  const [data, setData] = useState({ images: productData.images[0], index: 0 })

  return (
    <div className='container overflow-hidden'>
      <div className="productViewerSection">
        <div className='row'>
          <div className='col-lg-6 col-12  d-flex justify-content-center '>
            <div className='col-lg-2 col-4'>
              {productData.images.map((image, index) => {
                return (index < 4) ?
                  <div key={index} onClick={() => setData({ images:image, index })} className="productRow"  >
                    <img src={image} alt='' className='rounded'/>
                  </div> : null
              })
              }
            </div>
            <div className='col-lg-10 col-8' >
              <div className='displayproduct'>
                <div >
                  <img src={data ? data.images : productData.images[0]} alt="" width="100%" className='rounded' />
                </div>

              </div>

            </div>

          </div>
          <div className='col-lg-6 col-12 productview_itemsdetails'>
            <h3 >H&M</h3>
            <p className='Productview_namesdetils'>Pure Cotton Regular Fit Round-Neck T-shirt</p>
            <div>
              <p className='product-rating Productview_namesdetils'>4.8 <IoIosStar /> (284 Ratings)</p>
            </div>
            <div></div>
            <div>
              <h3 className='ratings'>RS. 599</h3>
              <p className='product-inclusive'>inclusive off all taxes</p>
            </div>
            <div className='d-flex'>
              <div className='product_sizes_dives mx-3'>
                <p className='product-sizes rounded-circle'>XS</p>
              </div>
              <div className='product_sizes_dives mx-3'>
                <p className='product-sizes rounded-circle'>S</p>
              </div>
              <div className='product_sizes_dives mx-3'>
                <p className='product-sizes rounded-circle'>M</p>
              </div>
              <div className='product_sizes_dives mx-3'>
                <p className='product-sizes rounded-circle'>L</p>
              </div>
              <div className='product_sizes_dives mx-3'>
                <p className='product-sizes rounded-circle'>XL</p>
              </div>
            </div>
            <div className='d-flex justify-content-evenly'>
              <div>
                <button className='productview_add'><TbShoppingBag /> ADD to Bag</button>
              </div>
              <div>
                <button className='product_wishlist'><CiHeart /> Wishlist</button>
              </div>
            </div>
            <div className='product_details_items'>
              <h3>PRODUCT DETAILS</h3>
              <div>
                <ul className='product_details_item'>
                  <li className='curstor-point-default'>Black T-shirt for men</li>
                  <li className='curstor-point-default'>Graphic printed</li>
                  <li className='curstor-point-default'>Regular length</li>
                  <li className='curstor-point-default'>Round neck</li>
                  <li className='curstor-point-default'>Short, regular sleeves</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SingleProduct