import React, {useState, useEffect} from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Outlet, Link} from "react-router-dom";
import './Navbar.css';
//import '../assets/logo.png';
export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [theme,setTheme] = useState('light-theme')
  const[logo,setLogo] = useState(require('../assets/Light-logo.png'))
  const[button,setButton] = useState(require("../assets/Moon_light.png"))


  useEffect(() => {
    document.body.className = theme;

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  },[theme])
  const toggleTheme = () => {
    if(theme === "light-theme")
    {
      setTheme("dark-theme");
      setLogo(require("../assets/dark-logo.png"))
      setButton((require("../assets/Sun_light.png")))
      
    }
    else
    {
      setTheme("light-theme");
      setLogo(require("../assets/Light-logo.png"))
      setButton((require("../assets/Moon_light.png")))
    }
  }
   



  return (
    <div className='navbar'>      
      <a className='link-item' href= "/"><img src={logo} alt="not_found" className='logo'></img></a>
      {(screenWidth > 900) && (
      <ul className='list'>
        <li className='list-item'><Link to="/" className='link-item'>HOME</Link></li>
        <li className='list-item'><Link to="/about-us" className='link-item'>ABOUT US</Link></li>
        <li className='list-item'><Link to="/apply" className='link-item'>APPLY</Link></li>
        <li className='list-item'><Link to="/secretariat" className='link-item'>SECRETARIAT</Link></li>
        <li className='list-item' id ='special'>
          <DropdownButton id="dropdown-basic-button" title="MORE">
            <div class ="extra-items">
              <Dropdown.Item href="/previous-editions">PREVIOUS EDITIONS</Dropdown.Item>
              <Dropdown.Item href="/gallery">GALLERY</Dropdown.Item>
              <Dropdown.Item href="/contact-us">CONTACT US</Dropdown.Item>
            </div>
          </DropdownButton>
        </li> 
        <li className='list-item' onClick={()=> toggleTheme()}>
          <img src = {button} alt ="Not_found" className='theme-button' ></img>
        </li>
      </ul>
      )}
      {screenWidth<=900 && (
        <ul className="nav-mob">
          <li className='list-item' onClick={()=> toggleTheme()}>
            <img src = {button} alt ="Not_found" className='theme-button' ></img>
          </li>
          <DropdownButton id="dropdown-basic-button" title={ <Hamburger size={20}/> }>
            <div class ="extra-items">
              <Dropdown.Item href="/">HOME</Dropdown.Item>
              <Dropdown.Item href="/about-us">ABOUT US</Dropdown.Item>
              <Dropdown.Item href="/apply">APPLY</Dropdown.Item>
              <Dropdown.Item href="/secretariat">SECRETARIAT</Dropdown.Item>
              <Dropdown.Item href="/previous-editions">PREVIOUS EDITIONS</Dropdown.Item>
              <Dropdown.Item href="/gallery">GALLERY</Dropdown.Item>
              <Dropdown.Item href="/contact-us">CONTACT US</Dropdown.Item>
            </div>
          </DropdownButton>
        </ul>
        
      )}
    </div>
    
  );
}