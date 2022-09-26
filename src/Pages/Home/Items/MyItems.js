import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';


const MyItems = () => {
    const { itemID } = useParams();
    console.log(itemID);
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const [item, setItem] = useState({});
    console.log(item);


    useEffect(() => {
        const url = `https://sunprothree.herokuapp.com/chair/${itemID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemID]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://sunprothree.herokuapp.com/orders/${itemID}`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Orderd Successfully');
                window.location.reload();
            })
    };


console.log(item.unitPerPrice);


    return (
        <div className='my-5'>
            <div className='text-center'>
                {
                    show ? <h4><span>UserName:{user.displayName}</span><span><h6>User email:{user.email}</h6></span></h4> : null
                }
                {
                    <button className='btn-info' onClick={() => setShow(!show)}>User Info</button>
                }
            </div>
            <div className='grid grid-cols-12 gap-4 items-center'>
                <div className='col-span-5 col-start-2 p-2 bg-white shadow'>
                    <div className=''>
                        <div className=''>
                            <h1 className='mb-2'>Product Name: {item.name} </h1>
                            <h1 className='mb-2'>Unit Per Price: {item.unitPerPrice}</h1>
                            <h1 className='mb-2'>Available Quantity: {item.quantity}</h1>
                            <h1 className='mb-2'>Min Order Quantity: {item.minOrderQuantity}</h1>
                            <h1 className='mb-2'>Supplier Name: {item.suppliername}</h1>
                            <h1 className='mb-2'>Details: {item.details}</h1>
                        </div>
                    </div>
                </div>
                <div className='col-span-5 my-5'>
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 p-2'
                            placeholder='Item Name'
                            type="text"
                            required
                            value={item?.name}
                            {...register("name")}
                        />
                        <textarea className='mb-2 p-2'
                            placeholder='Address'
                            type="text"
                            required
                            {...register("address")} />
                        <input className='mb-2 p-2'
                            placeholder='Quantity'
                            type="number"
                            min="1"
                            max={item.quantity}
                            {...register("quantity")} />
                        <input className='mb-2 p-2'
                            placeholder={'Price Per-Unit: '+ item?.unitPerPrice}
                            type="text"
                            value={item?.unitPerPrice}
                            {...register("unitPerPrice")}
                        />
                        <input className='mb-2 p-2'
                            placeholder='Phone number'
                            type="number"
                            {...register("phone")} />
                        <input className='mb-2 p-2'
                            placeholder='Supplier Email'
                            value={user?.email}
                            type="text"
                            {...register("email")}
                            readOnly />
                        <input className='btn btn-primary'
                            // disabled={!validate}
                            type="submit"
                            value="Purchase" />
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default MyItems;