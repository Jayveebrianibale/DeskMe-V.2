import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Booking from './User/Booking';
import Login from './Auth/Login';
import Authenticate from './Auth/Authenticate';
import AuthenticateSuccess from './Auth/AuthenticateSuccess';
import Dashboard from './User/Dashboard';
import ManageBooking from './User/ManageBooking';

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/authenticatesuccess" element={<AuthenticateSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/managebooking" element={<ManageBooking/>} />
      </Routes>
    </Router> 
  </div>
  
  );
}

export default App;
