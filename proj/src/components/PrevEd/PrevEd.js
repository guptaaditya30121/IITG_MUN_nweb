import React, { useState, useEffect } from 'react'
import '../PrevEd/PrevEd.css'
import sanityClient from "../../client";
import { data } from '../PrevEd/data2'
function PrevEd() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [selector, setselector] = useState(0);
    const [editions, setEditions] = useState();

    useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "previous_editions"]{
                    edition_num,
                    id,
                    council,
                    counciltext,
                    councilimg
                }`
			)
			.then((data) => setEditions(data))
			.catch(console.error);
	}, []);

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    function compare( a, b ) {
        if ( a.id < b.id){
          return -1;
        }
        if ( a.id > b.id){
          return 1;
        }
        return 0;
    }

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
            <>
            {editions &&
            editions.sort(compare) &&
            editions.map(edition => 
            <div className="preved" onMouseOut={() => { setselector(0); }} onMouseOver={() => { setselector(edition.id); }} >
                <div className='head'>
                    {edition.edition_num}
                </div>
                {!(selector === edition.id) &&
                    <div className="councils">
                        {
                            edition.council.map(t=>  <div className="council">
                                {t}
                                </div>)
                        }
                        
                    </div>
                }
                {(selector === edition.id) && 

                    <div className="councils">
                        {   
                            edition.council.map((council,i) =>  
                                <div className='container' style={{backgroundImage: `url(${edition.councilimg[i]})`, backgroundRepeat  : 'no-repeat',
                                backgroundPosition: 'center',}}>
                                    <div className='subhead'>{council}</div><br/>
                                        {edition.counciltext[i]}
                                </div>
                            )
                        }

                    </div>
                }

            </div>)}
            </>


        </div>
    )
}

export default PrevEd
