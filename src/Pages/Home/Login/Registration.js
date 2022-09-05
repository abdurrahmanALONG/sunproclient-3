import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Registration = () => {
    const navigate = useNavigate();
    const navigateLoginPage = event => {
        navigate('/')
    }
    return (
        <div className='back'>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-teal-700 text-3xl font-medium title-font mb-5 font-bold">Registration</h2>
                        <form >
                            <div class="relative mb-4">
                                <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                                <input type="text" id="" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id=" " name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <input
                                class="text-white w-full bg-teal-700 font-bold  border-0 py-2 px-8 focus:outline-none hover:bg-cyan-900 rounded text-lg"
                                type="submit"
                                value="Registration" />
                        </form>

                        <div className="relative my-4">
                            <p>Already Do have an account? <Link to="/login" className='text-teal-700 hover:text-cyan-900 font-bold text-xl pe-auto text-decoration-none' onClick={navigateLoginPage}>Please Login</Link> </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;