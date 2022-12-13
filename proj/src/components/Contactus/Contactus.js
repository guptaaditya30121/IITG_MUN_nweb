import React, { useState, useEffect } from 'react'
import '../Contactus/Contactus.css'
export default function Contactus() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    return (
        <div className='cont'>
            {(screenWidth > 750) && <div className="eclipse"></div>}
            {(screenWidth > 750) && <div className="eclipse-2"></div>}
            {(screenWidth > 750) && <div className="heading">
                <div className="block1"></div>
                <div className="text">
                    CONTACT US
                </div>
                <div className="block2"></div>
            </div>}
            {(screenWidth < 750) && <div className="text2">
                CONTACT-US
            </div>}
            <div className="vi">
                <ul className='lis'>
                    <li className='li1'>
                        CALL US:
                        <ul className='op'>
                            123456789<br/>
                            123456789<br/>
                            123456789
                        </ul>
                    </li>
                    <li className='li2'>
                       MAIL US:   
                       <ul className='op'>iitgmun@alcheringa.com</ul>
                    </li>
                    <li className='li3'>
                        OUR LOCATION:
                        
                            <img className="card" src={require("../Contactus/Frame\ 2.png")} alt="fvds"></img>
                           
                            
                    </li>
                </ul>
            </div>
        </div>
    );
}
