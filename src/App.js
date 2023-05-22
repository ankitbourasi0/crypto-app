
import './App.css';
import BlogCard from './components/Card';
import Login from './components/Login';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Signup from './components/Signup';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen     ">
      {/* <Navbar/>
      <Blog /> */}
      {/* <Signup/> */}
      {/* <Login /> */}
      {/* <Home/> */}
      <Sidebar/>
    </div>
  );
}

export default App;
