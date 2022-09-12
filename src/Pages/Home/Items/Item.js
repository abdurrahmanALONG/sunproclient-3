import React, { useEffect, useState } from 'react';
import './Item.css';
import ItemCard from './ItemCard';


const Item = () => {

    const [items, setItems] = useState([]);
    console.log(items);
    useEffect(() => {
        fetch('https://sunprothree.herokuapp.com/chair')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className='my-20 py-10 ItemsBack'>
            <div>
                <h1 className='text-4xl  font-bold ItemheadStyle'>OUR PRODUCTS</h1>
                <div className='marginStyle mt-3 w-fit mx-auto'><img className='' src="https://cdn.shopify.com/s/files/1/0257/7488/2876/files/title_img_shoba.png?v=1582185670" alt="" /></div>
            </div>

            <div className='DiscountStyleMain my-10 '>
                {
                    items.slice(0, 6).map(item => <ItemCard
                        key={item._id}
                        item={item}
                    // handleUpdateQuantity = {handleUpdateQuantity}
                    ></ItemCard>)
                }
            </div>

        </div>
    );
};

export default Item;