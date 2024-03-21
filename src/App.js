import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import LandingFooter from './components/LandingFooter';
import Reasons from './components/Reasons';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <div>
        <LandingFooter/>
        <div className='h-[1px] w-[80%] ml-40 bg-gray-400'></div>
      </div>
      <div>
        <Reasons/>
        <div className='h-[1px] w-[80%] ml-40 bg-gray-400'></div>
      </div>
      <Footer/>
    </div>
  
  );
}

export default App;
