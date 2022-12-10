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
                <div className='text-about'>WHAT WE DO</div>
                <div className="rightBlock"></div>
            </div>
            <div className="about">
                <p>The MUN, or the Model United Nations, is a simulation of the actual UN. The participants pretend to represent a nation, and come to together to discuss the very same issues being debated upon in the UN. This gives a normal person the opportunity to know what’s its like to stand for something more than himself/herself, and to experience the complicated the verbal dance and that politicians and delegates take part in everyday. The MUN is a conclave for ideation by the fresh minds of our nation, to brainstorm solutions to problems plaguing our world. Participants work through the tenuous relationships between nations as they deliberate towards a resolution , and they get to look nice in a suit and tie while they do it!</p>
            </div>
        </div>
     );
}
 
export default AboutUs;