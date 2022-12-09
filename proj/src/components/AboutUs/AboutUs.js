import React, {useState, useEffect} from 'react';

import "./AboutUs.css"

const AboutUs = () => {
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
        <div>
            {(screenWidth > 750) &&<div className="eclipse"></div>}
            <div className="banner">
                <div className="leftBlock"></div>
                <h1>WHAT WE DO</h1>
                <div className="rightBlock"></div>
            </div>
        </div>
     );
}
 
export default AboutUs;