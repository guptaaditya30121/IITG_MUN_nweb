import React from 'react';
import './Navbar.css';
//import '../assets/logo.png';
export default function Navbar() {
  return (
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
  );
}
