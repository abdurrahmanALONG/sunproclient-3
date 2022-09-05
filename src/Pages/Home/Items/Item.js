import React from 'react';
import './Item.css'
import Image1 from '../../../Images/Items/furnitur-1.png'
import Image2 from '../../../Images/Items/furnitur-2.png'
import Image3 from '../../../Images/Items/furnitur-3.png'

const Item = () => {
    return (
        <div className='my-20 py-10 ItemsBack'>
            <div>
                <h1 className='text-4xl  font-bold ItemheadStyle'>OUR PRODUCTS</h1>
                <div className='marginStyle mt-3 w-fit mx-auto'><img className='' src="https://cdn.shopify.com/s/files/1/0257/7488/2876/files/title_img_shoba.png?v=1582185670" alt="" /></div>
            </div>
            <div>
                <div className='DiscountStyleMain my-20 '>
                    <div className='DiscountStyle mx-10 justify-items-center gap-2'>
                        <div className="w-48 DiscountStyleImg my-10 ">
                            <img src={Image1} />
                        </div>
                        <div className='text-center my-10 '>
                            <h1 className='font-bold'>Aram Chair</h1>
                            <h3 className='text-4xl text-amber-900 mt-3 font-bold'>$120</h3>
                            <button className='btn mt-10 rounded-none'>BUY NOW</button>
                        </div>
                    </div>
                    <div className='DiscountStyle mx-10 justify-items-center gap-2'>
                        <div className="w-48 DiscountStyleImg my-10 ">
                            <img src={Image1} />
                        </div>
                        <div className='text-center my-10 '>
                            <h1 className='font-bold'>Aram Chair</h1>
                            <h3 className='text-4xl text-amber-900 mt-3 font-bold'>$120</h3>
                            <button className='btn mt-10 rounded-none'>BUY NOW</button>
                        </div>
                    </div>
                    <div className='DiscountStyle mx-10 justify-items-center gap-2'>
                        <div className="w-48 DiscountStyleImg mt-10 ">
                            <img src={Image2} />
                        </div>
                        <div className='text-center my-10 '>
                            <h1 className='font-bold'>Aram Chair</h1>
                            <h3 className='text-4xl text-amber-900 mt-3 font-bold'>$120</h3>
                            <button className='btn mt-10 rounded-none'>BUY NOW</button>
                        </div>
                    </div>
                    <div className='DiscountStyle mx-10 justify-items-center gap-2'>
                        <div className="w-48 DiscountStyleImg mt-10 ">
                            <img src={Image2} />
                        </div>
                        <div className='text-center my-10 '>
                            <h1 className='font-bold'>Aram Chair</h1>
                            <h3 className='text-4xl text-amber-900 mt-3 font-bold'>$120</h3>
                            <button className='btn mt-10 rounded-none'>BUY NOW</button>
                        </div>
                    </div>
                    <div className='DiscountStyle mx-10 justify-items-center gap-2'>
                        <div className="w-48 DiscountStyleImg my-10">
                            <img src={Image3} />
                        </div>
                        <div className='text-center my-10 '>
                            <h1 className='font-bold'>Aram Chair</h1>
                            <h3 className='text-4xl text-amber-900 mt-3 font-bold'>$120</h3>
                            <button className='btn mt-10 rounded-none'>BUY NOW</button>
                        </div>
                    </div>
                    <div className='DiscountStyle mx-10 justify-items-center gap-2'>
                        <div className="w-48 DiscountStyleImg my-10">
                            <img src={Image3} alt="" />
                        </div>
                        <div className='text-center my-10 '>
                            <h1 className='font-bold'>Aram Chair</h1>
                            <h3 className='text-4xl text-amber-900 mt-3 font-bold'>$120</h3>
                            <button className='btn mt-10 rounded-none'>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;