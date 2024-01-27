import { useEffect, useState } from 'react';
import '../src/styles/App.scss'
import Header, { HeaderPhone } from './Components/Header';
import Home from './Components/Home';
import Work from './Components/Work';
import Timeline from './Components/Timeline';
import Services from './Components/Services';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const [menuOpen,setMenuOpen]=useState(false)  
  // console.log(menuOpen); 
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  // console.log(ratio) 
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return ratio <2.2 ?(
  <>
    <Toaster/>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home ratio={ratio}/>
    <Work/>
    <Timeline/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
) : <em id='customMessage'>Please Change the ration to View!</em>
}

export default App;
