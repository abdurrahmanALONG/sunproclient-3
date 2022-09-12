import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='Dashback'>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content mt-5">
                    <h2 className='text-2xl font-bold text-center text-purple-500'>Welcome to your Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto font-bold w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My History</Link></li>
                        <li><Link to="/dashboard/review">My Reviews</Link></li>
                        <li><Link to="/dashboard/myitems">My Items</Link></li>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/manageProduct">Manage Prodducts</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;