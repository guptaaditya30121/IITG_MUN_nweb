import React, {useState, useEffect} from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Navbar.css';
//import '../assets/logo.png';
export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  },[])

  return (
    <div className='navbar'>      
      <img src={ require('../assets/logo.png')} alt="not_found" className='logo'></img>
      {(screenWidth > 700) && (
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
      </ul>
      )}
      {screenWidth<=700 && (
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
