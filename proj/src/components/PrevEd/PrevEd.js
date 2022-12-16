import React, { useState, useEffect } from 'react'
import '../PrevEd/PrevEd.css'
import { data } from '../PrevEd/data2'
function PrevEd() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [selector, setselector] = useState(0);
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    const editions = data.map(edition => <div className="preved" onMouseOut={() => { setselector(0); }} onMouseOver={() => { setselector(edition.id); }} >
        <div className='head'>
            {edition.name}
        </div>
        {!(selector === edition.id) &&
         <div className="councils">
            {
                edition.council.map((t,key) =>  <div className="council">
                    {edition.council[key]}
                    </div>)
            }
            
        </div>}
        {(selector === edition.id) && 
        <div className="councils">
            {
                edition.councilimg.map((t,key) =>  
    
    <div className='container' style={{backgroundImage: `url(${t})`}}>
        <div className='subhead'>{edition.council[key]}</div><br/>

        {edition.counciltext[key]}
                   </div>
                    )
            }

          

        </div>}

    </div>);
    return (
        <div>
            <div className="eclipse1"></div>
            <div className="eclipse-21"></div>
            {(screenWidth > 750) && <div className="heading1" >
                <div className="block11"></div>
                <div className="text1">
                    PREVIOUS EDITIONS
                </div>
                <div className="block21"></div>
            </div>}
            {(screenWidth < 750) && <div className="text21">
                PREVIOUS EDITIONS
            </div>}
            <>{editions}</>


        </div>
    )
}

export default PrevEd
