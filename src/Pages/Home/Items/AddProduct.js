import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const unitPerPrice = event.target.price.value;
        const quantity = event.target.quantity.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const user = { name, email, img, unitPerPrice, quantity, address, phone };
        console.log(user);

        fetch('http://localhost:5000/chair', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Add Successfully');
                window.location.reload();
            })
    }

    return (
        <div className=''>
            {/* <h1>hi this is for add products</h1> */}
            <section class="text-gray-600 body-font">
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
            </section>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;