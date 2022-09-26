import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import './Item.css'

const OrderPage = () => {
    const { itemID } = useParams();
    const [user] = useAuthState(auth);
    const [show, setShow] = useState(false);
    const [item, setItem] = useState({});


    useEffect(() => {
        const url = `https://sunprothree.herokuapp.com/chair/${itemID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemID]);

    const  handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const unitPerPrice = event.target.price.value;
        const quantity = event.target.quantity.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const user = { name, email, img, unitPerPrice, quantity, address, phone };

        fetch('https://sunprothree.herokuapp.com/chair', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Purchase Successfully');
                window.location.reload();
            })
    }

    

    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data);
    //     const url = `https://sunprothree.herokuapp.com/chair`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             toast('Orderd Successfully');
    //             window.location.reload();
    //         })
    // };


    console.log(item.unitPerPrice);

    return (
        <div className=' orderBack h-full'>
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
                    <form className='d-flex flex-column orderBack ' onSubmit={handleSubmit}>
                        <div class="hero min-h-screen ">
                            <div class="hero-content flex-col lg:flex-row-reverse">
                                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div class="card-body">
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text font-bold text-xl">Item Name</span>
                                            </label>
                                            <input className='mb-2'
                                                placeholder='Item Name'
                                                type="text"
                                                value={item?.name}
                                                name="name"
                                            />
                                        </div>
                                        <div class="form-control ">
                                            <label class="label">
                                                <span class="label-text font-bold text-xl">Address</span>
                                            </label>
                                            <textarea className='mb-2'
                                                placeholder='Address'
                                                type="text"
                                                name="address" />
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text font-bold text-xl">Quantity</span>
                                            </label>
                                            <input className='mb-2'
                                                placeholder='Quantity'
                                                type="number"
                                                min={item.minOrderQuantity}
                                                max={item.availableQuantity}
                                                name="quantity" />
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text font-bold text-xl">Unit Per-Price</span>
                                            </label>
                                            <input className='mb-2'
                                                placeholder='Unit Per-Price'
                                                type="number"
                                                value={item?.unitPerPrice}
                                                name="price"
                                            />
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text font-bold text-xl">Phone number</span>
                                            </label>
                                            <input className='mb-2'
                                                placeholder='Phone number'
                                                type="number"
                                                name="phone" />
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text font-bold text-xl">Supplier Email</span>
                                            </label>
                                            <input className='mb-2'
                                                placeholder='Supplier Email'
                                                value={user?.email}
                                                type="text"
                                                name="email"
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
                {/* <section class="text-gray-600 body-font">
                <div class=" px-5 py-5  flex h-screen justify-center flex-wrap items-center">
                    <div class="md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
                        <h2 class=" text-3xl font-medium title-font mb-5 font-bold">Please Add A new Items</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="relative mb-4">
                                <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                                <input type="text" id="" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id=" " name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Unit Price</label>
                                <input type="number" id="" name="price" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="quantity" class="leading-7 text-sm text-gray-600">Quantity</label>
                                <input type="number" id="" name="quantity" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="Address" class="leading-7 text-sm text-gray-600">Address</label>
                                <input type="text" id="" name="address" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
                                <input type="number" id="" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Image Url</label>
                                <input type="text" id="" name="img" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <input
                                class="text-white btn border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                type="submit"
                                value="Add Item" />
                        </form>
                    </div>
                </div>
            </section> */}
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default OrderPage;