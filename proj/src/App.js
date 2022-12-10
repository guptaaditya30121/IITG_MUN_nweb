
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Secretariat from './components/Secretariat/Secretariat'
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
    <Navbar/>
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/secretariat" element={<Secretariat/>}/>
        <Route exact path="/about-us" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  
  <Footer />
  </>
  );
}

export default App;
