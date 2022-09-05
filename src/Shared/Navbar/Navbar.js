import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({children}) => {
    return (
        <div className="drawer h-full drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mb-auto">
                <div className="w-full navbar  px-20">
                    <div className="flex-1 px-2 mx-2 text-3xl">AR-TOOLS</div>
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-5">
                            <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/">Home</Link></li>
                            <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/about">About</Link></li>
                            <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/products">Products</Link></li>
                            <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/blogs">Blogs</Link></li>
                            {/* <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/additem">AddItem</Link></li> */}
                            <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/myitem">MyItem</Link></li>
                            <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/login">Login</Link></li>

                            {/* <li><NavLink to="/login">Login</Link></li> */}

                            {/* {
                                user ?

                                    <button classNameName='btn btn-link' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <NavLink classNameName="mt-3" as={Link} to="Login">
                                        Login
                                    </NavLink>
                            } */}
                        </ul>
                    </div>

                    <div class="flex-none">
                        <div class="dropdown dropdown-end mx-2">
                            <button class="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                        <div class="dropdown dropdown-end mx-2">
                            <label tabindex="0" class="btn btn-ghost btn-circle">
                                <div class="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span class="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div class="card-body">
                                    <span class="font-bold text-lg">8 Items</span>
                                    <span class="text-info">Subtotal: $999</span>
                                    <div class="card-actions">
                                        <button class="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown dropdown-end mx-2">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 ">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    {/* <li><NavLink to="/additem">AddItem</NavLink></li> */}
                    <li><NavLink to="/myitem">MyItem</NavLink></li>
                    {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
                    {/* <li><NavLink to="/login">Login</NavLink></li> */}
                    {/* {
                        user ?
                            <button classNameName='btn btn-link' onClick={handleSignOut}>Sign out</button>
                            :
                            <NavLink as={Link} to="Login">
                                Login
                            </NavLink>
                    } */}

                </ul>

            </div>
        </div>
    );
};

export default Navbar;