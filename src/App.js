
import { Route, Routes } from "react-router-dom";
import BlogCard from "./components/Card";
import Login from "./components/Login";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Trade from "./pages/Trade";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Earning from "./pages/Earning";
import Legal from "./pages/Legal";
import Resources from "./pages/Resources";
import Referral from "./pages/Referral"; 

function App() {
  return (
    <div className="App bg-black text-white  min-h-screen    ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/trade" element={<Trade/>} />
        <Route path="/earning" element={<Earning/>} >
        </Route>

        <Route path="/refferal" element={<Referral/>} />

        <Route path="/legal" element={<Legal/>} />
        <Route path="/resources" element={<Resources/>} />


        <Route path="/dashboard" element={<Sidebar/>} />


      </Routes>
      <Footer />
      {/* <Signup/> */}
   
 
      {/*<Sidebar/>*/}
    </div>
  );
}

export default App;
