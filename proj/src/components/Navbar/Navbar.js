import React, {useState, useEffect} from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
      setButton((require("../assets/Subtract.png")))
      
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
      <img src={logo} alt="not_found" className='logo'></img>
      {(screenWidth > 750) && (
      <ul className='list'>
        <li className='list-item'>HOME</li>
        <li className='list-item'>ABOUT US</li>
        <li className='list-item'>APPLY</li>
        <li className='list-item'>APPLY</li>
        <li className='list-item' id ='special'>
          <DropdownButton id="dropdown-basic-button" title="MORE">
            <div class ="extra-items">
              <Dropdown.Item href="#">LABEL</Dropdown.Item>
              <Dropdown.Item href="#">LABEL</Dropdown.Item>
              <Dropdown.Item href="#">LABEL</Dropdown.Item>
            </div>
          </DropdownButton>
        </li>
        <li className='list-item' onClick={()=> toggleTheme()}>
          <img src = {button} alt ="Not_found" className='theme-button' ></img>
        </li>
      </ul>
      )}
      {screenWidth<=750 && (
          <DropdownButton id="dropdown-basic-button" title={ <Hamburger size={20}/> }>
            <div class ="extra-items">
              <Dropdown.Item href="#">HOME</Dropdown.Item>
              <Dropdown.Item href="#">ABOUT US</Dropdown.Item>
              <Dropdown.Item href="#">APPLY</Dropdown.Item>
              <Dropdown.Item href="#">LABEL</Dropdown.Item>
              <Dropdown.Item href="#">LABEL</Dropdown.Item>
              <Dropdown.Item href="#">LABEL</Dropdown.Item>
            </div>
          </DropdownButton>
        
        
      )}
      
      
    </div>
    
  );
}