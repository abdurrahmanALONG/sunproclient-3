import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const navigateRegiestarPage = event => {
        navigate('/registration');
    }
    return (
        <div className='w-full'>
            <div className='back'>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 class=" text-3xl text-teal-700 font-medium title-font mb-5 font-bold">Login</h2>
                            <form >
                                <div class="relative mb-4">
                                    <label for="Email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div class="relative mb-4">
                                    <label for="Password" class="leading-7 text-sm text-gray-600">Password</label>
                                    <input type="password" id="" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                {/* <button class="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Login</button> */}
                                <input
                                    class="text-white w-full bg-teal-700  border-0 py-2 px-8 focus:outline-none hover:bg-cyan-900 rounded text-lg"
                                    type="submit"
                                    value="Login" />
                            </form>

                            <div className="relative my-4">
                                <p> If you are new here... <Link to="/registration" className="text-teal-700 hover:text-cyan-900 font-bold pe-auto text-decoration-none"  onClick={navigateRegiestarPage}>Please Register First</Link> </p>
                                <p>Forget Password? <button className='text-teal-700 hover:text-cyan-900 font-bold pe-auto text-decoration-none ' >Reset Password</button> </p>
                            </div>
                            <div className="relative my-4 mx-auto">
                                {/* <GoogleLogin />
                                <ToastContainer></ToastContainer> */}
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Login;