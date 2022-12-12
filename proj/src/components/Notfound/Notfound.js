import React from 'react'
import '../Notfound/Notfound.css';
import '../../App.css'
export default function Notfound() {
  return (
    <div className='notfound'>
      <img className='im' src={require('.//imgg.jpeg')}/>  
      <div className='text21'>ERROR : 404</div>
      <div className='text21'>OOPS! PAGE NOT FOUND</div>
    </div>
  );
}
