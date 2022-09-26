import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Home/Login/Login';
import Registration from './Pages/Home/Login/Registration';
import Product from './Pages/Home/Product/Product';
import About from './Pages/About/About';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import MyItems from './Pages/Home/Items/MyItems';
import MyReview from './Pages/MyReview/MyReview';
import Payment from './Shared/Payment';
// import RequireAdmin from './Pages/RequireAuth/RequireAdmin';
import Users from './Pages/Home/Login/Users';
import AddProduct from './Pages/Home/Items/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import Blogs from './Pages/Blogs/Blogs';
import Notfound from './Notfound.js/Notfound';
import OrderPage from './Pages/Home/Items/OrderPage';
import ManageProduct from './Pages/Home/Items/ManageProduct';




function App() {
  return (
    <div className='bodyStyle' >
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Product" element={<Product />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="/item/:itemID" element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>}>
          </Route>
          <Route path="/item/:itemID" element={ <ManageProduct></ManageProduct>}></Route>
          <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route path="review" element={<MyReview></MyReview>}></Route>
            <Route path="myitems" element={<MyItems></MyItems>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
            {/* <Route path="/item/:itemID" element={ <ManageProduct></ManageProduct>}></Route> */}
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
