import React, {useState, useEffect} from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from "react-router-dom";
import './Navbar.css';
//import '../assets/logo.png';
export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [theme,setTheme] = useState('light-theme')
  const[logo,setLogo] = useState(require('../assets/Light-logo.png'))
  const[button,setButton] = useState(require("../assets/Moon_light.png"))
  const [isOpen, setOpen] = useState(false)


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
      <Link to="/" className='link-item' href= "/"><img src={logo} alt="not_found" className='logo'></img></Link>
      {(screenWidth > 900) && (
      <ul className='list'>
        <li className='list-item'><Link to="/" className='link-item'>HOME</Link></li>
        <li className='list-item'><Link to="/about-us" className='link-item'>ABOUT US</Link></li>
        <li className='list-item'><Link to="/apply" className='link-item'>APPLY</Link></li>
        <li className='list-item'><Link to="/secretariat" className='link-item'>SECRETARIAT</Link></li>
        <li className='list-item' id ='special'>
          <DropdownButton id="dropdown-basic-button" title="MORE">
            <div class ="extra-items">
              <Dropdown.Item as={Link} to="/previous-editions">PREVIOUS EDITIONS</Dropdown.Item>
              <Dropdown.Item as={Link} to="/gallery">GALLERY</Dropdown.Item>
              <Dropdown.Item as={Link} to="/contact-us">CONTACT US</Dropdown.Item>
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
          <DropdownButton id="dropdown-basic-button" title={ <Hamburger size={20} toggled={isOpen} toggle={setOpen}/> }>
            <div class ="extra-items">
              <Dropdown.Item as={Link} to="/"onClick={() => setOpen(false)}>HOME</Dropdown.Item>
              <Dropdown.Item as={Link} to="/about-us"onClick={() => setOpen(false)}>ABOUT US</Dropdown.Item>
              <Dropdown.Item as={Link} to="/apply"onClick={() => setOpen(false)}>APPLY</Dropdown.Item>
              <Dropdown.Item as={Link} to="/secretariat"onClick={() => setOpen(false)}>SECRETARIAT</Dropdown.Item>
              <Dropdown.Item as={Link} to="/previous-editions"onClick={() => setOpen(false)}>PREVIOUS EDITIONS</Dropdown.Item>
              <Dropdown.Item as={Link} to="/gallery"onClick={() => setOpen(false)}>GALLERY</Dropdown.Item>
              <Dropdown.Item as={Link} to="/contact-us"onClick={() => setOpen(false)}>CONTACT US</Dropdown.Item>
            </div>
          </DropdownButton>
        </ul>
        
      )}
    </div>
    
  );
}