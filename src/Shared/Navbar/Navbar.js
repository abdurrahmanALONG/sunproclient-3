import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>
        signOut(auth);
    return (
        <div className="drawer h-full drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mb-auto">
                <div className="w-full navbar  px-20">
                    <div className="flex-1 px-2 mx-2 text-3xl font-bold text-teal-700">AR-TOOLS</div>
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-5">
                            <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/">Home</Link></li>
                            <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/about">About</Link></li>
                            <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/product">Product</Link></li>
                            <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/blogs">Blogs</Link></li>
                            {/* <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/additem">AddItem</Link></li> */}
                            {/* <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/myitem">MyItem</Link></li> */}
                            {
                                user && <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/dashboard">Dashboard</Link></li>
                            }
                            {/* <li><Link className='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' to="/login">Login</Link></li> */}


                            <li>
                                {
                                    user ?

                                        <button classNameName='hover:bg-hoverColor hover:text-white font-semibold text-hoverColor' onClick={handleSignOut}>Sign out</button>
                                        :
                                        <Link classNameName=" hover:bg-hoverColor hover:text-white font-semibold text-hoverColor" to="Login">
                                            Login
                                        </Link>
                                }
                            </li>
                        </ul>
                    </div>

                    <div class="flex-none">
                        <div class="dropdown dropdown-end mx-2">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" alt="" />
                                </div>
                            </label>
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
                    <li><NavLink to="/product">Product</NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                    {/* <li><NavLink to="/additem">AddItem</NavLink></li> */}
                    <li><NavLink to="/myitem">MyItem</NavLink></li>
                    {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
                    {/* <li><NavLink to="/login">Login</NavLink></li> */}
                    {
                        user ?
                            <button classNameName='btn btn-link' onClick={handleSignOut}>Sign out</button>
                            :
                            <NavLink as={Link} to="Login">
                                Login
                            </NavLink>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Navbar;