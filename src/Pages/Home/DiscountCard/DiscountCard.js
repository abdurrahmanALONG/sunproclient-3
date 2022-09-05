import React from 'react';
import Image1 from '../../../Images/Items/furnitur-1.png';
import Image2 from '../../../Images/Items/furnitur-2.png';
import Image3 from '../../../Images/Items/furnitur-3.png';
import './DiscountCard.css'

const DiscountCard = () => {
    return (
        <div className='DiscountStyleMain my-20 '>
            <div className='DiscountStyle mx-10 justify-items-center gap-2'>
                <div className="w-48 DiscountStyleImg my-10 ">
                    <img src={Image1} />
                </div>
                <div className='text-center my-10 '>
                    <h1 className='font-bold'>SALE OFF UPTO</h1>
                    <h3 className='text-4xl text-amber-900 mt-3 font-bold'>30% Off</h3>
                    <button className='btn mt-10 rounded-none'>SHOP NOW</button>
                </div>
            </div>
            <div className='DiscountStyle mx-10 justify-items-center gap-2'>
                <div className="w-48 DiscountStyleImg mt-10 ">
                    <img src={Image2} />
                </div>
                <div className='text-center my-10'>
                    <h1 className='font-bold'>SALE OFF UPTO</h1>
                    <h3 className='text-4xl text-amber-900 mt-3 font-bold'>30% Off</h3>
                    <button className='btn mt-10 rounded-none '>SHOP NOW</button>
                </div>
            </div>
            <div className='DiscountStyle mx-10 justify-items-center gap-2'>
                <div className="w-48 DiscountStyleImg my-10">
                    <img src={Image3} />
                </div>
                <div className='text-center my-10 '>
                    <h1 className='font-bold'>SALE OFF UPTO</h1>
                    <h3 className='text-4xl text-amber-900 mt-3 font-bold'>30% Off</h3>
                    <button className='btn mt-10 rounded-none'>SHOP NOW</button>
                </div>
            </div>
        </div>
    );
};

export default DiscountCard;