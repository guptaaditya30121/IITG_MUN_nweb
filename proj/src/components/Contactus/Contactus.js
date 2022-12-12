import React from 'react'
import '../Contactus/Contactus.css'
export default function Contactus() {
    return (
        <div>
            {(screenWidth > 750) && <div className="eclipse"></div>}
            {(screenWidth > 750) && <div className="eclipse-2"></div>}
            {(screenWidth > 750) && <div className="heading">
                <div className="block1"></div>
                <div className="text">
                    THE SECRETARIAT
                </div>
                <div className="block2"></div>
            </div>}
            {(screenWidth < 750) && <div className="text2">
                CONTACT-US
            </div>}
        </div>
    )
}
