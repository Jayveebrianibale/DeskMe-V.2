import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Routes , Router, Route} from  'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      
      {/* <Home/> */}
     
    </div>
  
  );
}

export default App;
