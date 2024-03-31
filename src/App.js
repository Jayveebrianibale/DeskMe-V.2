import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './components/Navbar';
import Booking from './User/Booking';
import Login from './Auth/Login';
import Authenticate from './Auth/Authenticate';
import AuthenticateSuccess from './Auth/AuthenticateSuccess';
import Dashboard from './User/Dashboard';

function App() {
  return (
    <div>
      {/* <AuthenticateSuccess/> */}
      {/* <Authenticate/> */}
      {/* <Login/> */}
      {/* <Dashboard/> */}
      <Booking/>
      {/* <Navbar/>
      <About/> */}
      
      {/* <Home/> */}
     
    </div>
  
  );
}

export default App;
