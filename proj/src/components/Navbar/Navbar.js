import React from 'react';
import './Navbar.css';
//import '../assets/logo.png';
export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={ require('../assets/logo.png')} alt="not_found" className='logo'></img>
      <ul className='list'>
        <li className='list-item'>HOME</li>
        <li className='list-item'>ABOUT US</li>
        <li className='list-item'>APPLY</li>
        <li className='list-item'>APPLY</li>
        <li className='list-item'>MORE</li>
      </ul>
    </div>
  );
}
