import React, { useState } from 'react';
import '../CSS/SingleProduct.css';
import { TbShoppingBag } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";

const productData = {
  id: 3,
  title: "Mens colloect jacket",
  price: "$ 55.8",
  desciption: "great outerwer jackets",
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zMgoTVr3ZxCmKkiBJQvM41wjcse3ymKYJDVul6NZuelOaBLYSOA-5rtRKQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWfcJ_SJAx9Kv3lBqZNbUYL8XVfm7-HphGc90P6K5z8Hk7GgfrUnresR90g&s",

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
                    <img src={image} alt='' />
                  </div> : null
              })
              }
            </div>
            <div className='col-lg-10 col-8' >
              <div className='displayproduct'>
                <div >
                  <img src={data ? data.images : productData.images[0]} alt="" width="100%" />
                </div>

              </div>

            </div>

          </div>
          <div className='col-lg-6 col-12 productview_itemsdetails'>
            <h3 >H&M</h3>
            <p className='Productview_namesdetils'>Pure Cotton Regular Fit Round-Neck T-shirt</p>
            <div>
              <p className='product-rating'>4.8 <IoIosStar /> (284 Ratings)</p>
            </div>
            <div></div>
            <div>
              <h3>RS. 599</h3>
              <p className='product-inclusive'>inclusive off all taxes</p>
            </div>
            <div className='d-flex justify-content-evenly'>
              <div className='product_sizes_dives'>
                <p className='product-sizes'>XS</p>
              </div>
              <div className='product_sizes_dives'>
                <p className='product-sizes'>S</p>
              </div>
              <div className='product_sizes_dives'>
                <p className='product-sizes'>M</p>
              </div>
              <div className='product_sizes_dives'>
                <p className='product-sizes'>L</p>
              </div>
              <div className='product_sizes_dives'>
                <p className='product-sizes'>XL</p>
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
                  <li>Black T-shirt for men</li>
                  <li>Graphic printed</li>
                  <li>Regular length</li>
                  <li>Round neck</li>
                  <li>Short, regular sleeves</li>
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