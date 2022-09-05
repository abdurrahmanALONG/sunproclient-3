import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Home/Login/Login';
import Registration from './Pages/Home/Login/Registration';
import Item from './Pages/Home/Items/Item';


function App() {
  return (
    <div className='bodyStyle' >
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          {/* <Route path="Item" element={<Item />} /> */}
          <Route path="Login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
