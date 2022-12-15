
import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Secretariat from './components/Secretariat/Secretariat'
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Gallery from "./components/Gallery/Gallery";
import Apply from "./components/Apply/Apply";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import Contactus from "./components/Contactus/Contactus";

function App() {
  useEffect(() => {
        
    AOS.init({duration:2000});

  },[])
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/secretariat" element={<Secretariat/>}/>
        <Route exact path="/about-us" element={<AboutUs/>}/>
        <Route exact path="/contact-us" element={<Contactus/>}/>
        <Route exact path="/gallery" element={<Gallery/>}/>
        <Route exact path="/apply" element={<Apply/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
