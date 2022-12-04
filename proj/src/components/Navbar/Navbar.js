import React from 'react';
import './Navbar.css';
//import '../assets/logo.png';
export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={ require('../assets/logo.png')} alt="not_found" className='logo'></img>
      <ul className='list'>
        <li className='list-item' href="www.google.com"><a className='link' href='www.google.com'>HOME</a></li>
        <li className='list-item'>
          <a className='link' href='www.google.com'>ABOUT US</a></li>
        <li className='list-item'>
        <a className='link' href='www.google.com'>APPLY</a>
        </li>
        <li className='list-item'>
        <a className='link' href='www.google.com'>APPLY</a>
        </li>
        <li className='list-item'>
        <a className='link' href='www.google.com'>MORE</a>
        </li>
      </ul>
    </div>
  );
}
