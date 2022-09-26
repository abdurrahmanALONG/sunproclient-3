import React from 'react';
import './Product.css'

const ProductCard = ({ item }) => {
    const { name, img } = item;
    return (
        <div>
            <div className='DiscountStyle mx-10 my-10 justify-items-center gap-2'>
                <div className="w-48 DiscountStyleImg my-10 ">
                    <img src={img} alt="" />
                </div>
                <div className='text-center my-10 '>
                    <h1 className='font-bold'>{name}</h1>
                    <h3 className='text-4xl text-amber-900 mt-3 font-bold'>$120</h3>
                    <button className='btn mt-10 rounded-none'>BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;