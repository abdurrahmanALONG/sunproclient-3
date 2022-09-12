import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import './Item.css'

const OrderPage = () => {
    const { itemID } = useParams();
    console.log(itemID);
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const [item, setItem] = useState({});


    useEffect(() => {
        const url = `https://sunprothree.herokuapp.com/chair/${itemID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemID]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://sunprothree.herokuapp.com/chair`;
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
        <div className=' orderBack'>
            <div className='text-center my-10'>
                {
                    show ? <h4><span>UserName:{user.displayName}</span><span><h6>User email:{user.email}</h6></span></h4> : null
                }
                {
                    <button className='btn-info' onClick={() => setShow(!show)}>User Info</button>
                }
            </div>
            <div>
                <h1 className='text-center my-4'>This is the full Details about the product</h1>
            </div>
            <div className='grid grid-cols-2 my-10 '>
                <div className='h-full mx-10'>
                    <div class="card w-96 h-full bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={item.img} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{item.name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
                <div className='w-full  orderBack'>
                    <form className='d-flex flex-column orderBack ' onSubmit={handleSubmit(onSubmit)}>
                        <div class="hero min-h-screen ">
                            <div class="hero-content flex-col lg:flex-row-reverse">
                                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div class="card-body">
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">Item Name</span>
                                            </label>
                                            <input className='mb-2'
                                                placeholder='Item Name'
                                                type="text"
                                                value={item?.name}
                                                {...register("name")}
                                            />
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">Address</span>
                                            </label>
                                            <textarea className='mb-2'
                                                placeholder='Address'
                                                type="text"
                                                {...register("address")} />
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">Quantity</span>
                                            </label>
                                            <input className='mb-2'
                                                placeholder='Quantity'
                                                type="number"
                                                min={item.minOrderQuantity}
                                                max={item.availableQuantity}
                                                {...register("quantity")} />
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">Unit Per-Price</span>
                                            </label>
                                            <input className='mb-2'
                                                placeholder='Unit Per-Price'
                                                type="number"
                                                value={item?.unitPerPrice}
                                                {...register("unitPerPrice")}
                                            />
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">Phone number</span>
                                            </label>
                                            <input className='mb-2'
                                                placeholder='Phone number'
                                                type="number"
                                                {...register("phone")} />
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">Supplier Email</span>
                                            </label>
                                            <input className='mb-2'
                                                placeholder='Supplier Email'
                                                value={user?.email}
                                                type="text"
                                                {...register("email")}
                                                readOnly />
                                        </div>
                                        <div class="form-control mt-6">
                                            <input className='btn btn-primary'
                                                // disabled={!validate}
                                                type="submit"
                                                value="Purchase" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form> 
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default OrderPage;