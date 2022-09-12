import React from 'react';
import './NewCollection.css'
import Img_1 from '../../../Images/Bannar/img-7.png'
import Img_2 from '../../../Images/Bannar/img-8.png';
import Img_3 from '../../../Images/Bannar/img-9.png';
import Img_4 from '../../../Images/Bannar/img-10.png';


const NewCollection = () => {
  return (
    <div className='my-20 py-10 NewcollectionHader'>
      <div>
        <h1 className='text-4xl font-bold headStyle'>NEW COLLECTIONS</h1>
        <div className='marginStyle mt-3 w-fit mx-auto'><img className='' src="https://cdn.shopify.com/s/files/1/0257/7488/2876/files/title_img_shoba.png?v=1582185670" alt="" /></div>
      </div>

      <div className='myContainer mx-auto mt-12  grid grid-cols-12 gap-4'>

        <div className='col-span-8'>
          <div className='grid grid-cols-2 gap-6'> 
          <div className='col-span-1 bg-blue-200'>
            <div className="NewcolactionStyleImg w-72">
              <img src={Img_1} alt="" />
            </div>
          </div>
          <div className='col-span-1 bg-blue-200'>
            <div className="NewcolactionStyleImg w-72">
              <img src={Img_2} alt="" />
            </div>
          </div>
          <div className='col-span-1 bg-blue-200'>
            <div className="NewcolactionStyleImg w-72">
              <img src={Img_3} alt="" />
            </div>
          </div>
          <div className='col-span-1 bg-blue-200'>
            <div className="NewcolactionStyleImg w-72">
              <img src={Img_4} alt="" />
            </div>
          </div>
          </div>
        </div>

        <div className='col-span-4 bg-bg1 flex flex-col justify-center'>
          <div className='px-4 text-center'>
          <h1 className='text-4xl font-bold mb-8'>All New Collections for our valuable customers</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default NewCollection;