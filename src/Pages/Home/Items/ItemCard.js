import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const ItemCard = ({item}) => {
    const {name, img, _id } = item;
    const navigate = useNavigate();
    const navigatePurchasePage = id => {
        console.log(id)
        navigate(`/item/${id}`);
    }
    return (
        <div>
                
                    <div className='DiscountStyle mx-10 my-10 justify-items-center gap-2'>
                        <div className="w-48 DiscountStyleImg my-10 ">
                            <img src={img} alt="" />
                        </div>
                        <div className='text-center my-10 '>
                            <h1 className='font-bold'>{name}</h1>
                            <h3 className='text-4xl text-amber-900 mt-3 font-bold'>$120</h3>
                            <button className='btn mt-10 rounded-none' onClick={()=>navigatePurchasePage(_id)}>BUY NOW</button>
                        </div>
                    </div>
                </div>
    );
};

export default ItemCard;