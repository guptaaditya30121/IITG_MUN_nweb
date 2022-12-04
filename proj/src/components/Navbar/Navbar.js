import React ,{useState} from 'react';
import './Navbar.css';
//import '../assets/logo.png';
import {GiHamburgerMenu} from "react-icons/gi";

export default function Navbar() {
  const [show,setShow] = useState(false);
  return (
    <div>
    <div className='navbar'>
      <img src={ require('../assets/logo.png')} alt="not_found" className='logo'></img>
      <ul className='list'>
        <a className='link' href='www.google.com'>HOME</a>
        <a className='link' href='www.google.com'>ABOUT US</a>
        <a className='link' href='www.google.com'>APPLY</a>
        <a className='link' href='www.google.com'>APPLY</a>
        <a className='link' href='www.google.com'>MORE</a>
      </ul>
      
    </div>
    <div >
        <a className="hamburger-menu" href ="#"  onClick={() => setShow(!show)}>
        <GiHamburgerMenu/>
        </a>
        
      </div>
      <div className="drop-menu">
      <a className={show?"link-drop":"link"} href='www.google.com'>HOME</a>
      <a className={show?"link-drop":"link"} href='www.google.com'>ABOUT US</a>
      <a className={show?"link-drop":"link"} href='www.google.com'>APPLY</a>
      <a className={show?"link-drop":"link"} href='www.google.com'>APPLY</a>
      <a className={show?"link-drop":"link"} href='www.google.com'>MORE</a>
    </div>
    </div>
  );
}
