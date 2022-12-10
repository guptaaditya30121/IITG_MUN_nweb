import React, { useState, useEffect } from 'react'
import './Secretariat.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {people} from './data.js';
import sanityClient from "../../client";   
export default function Secretariat() {
    const [isHovering, setIsHovering] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [ppeople, setPpeople] = useState(null);

    useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "secretariat"]{
					_id,
                    name,
                    post,
                    img_url,
                    status,
                    id,
                    alt,
                    link_insta,
                    link_linkedin,
                }`
			)
			.then((data) => setPpeople(data))
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
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
      const listItems = people.map(person =>
        <div className="profile" onMouseOver={()=>{person.status=0; setIsHovering(true); }} onMouseOut={()=>{person.status=1; setIsHovering(false);}}>
                            <img src={person.img_url} alt = "Not found"className="prof_img"></img>
                            {person.status&& (<div className="initial">
                                <div className='info'>{person.name}</div>
                                <div className='subinfo'>{person.post}</div>
                            </div>)}
                            {person.status===0 && (<div className="final">
                                <div className='info2'>{person.name}</div>
                                <div className='subinfo2'>{person.post}</div>
                                <a href="www.google.com"><InstagramIcon id="insta1" color='disabled'/></a>
                                <a href="www.google.com"><LinkedInIcon id="linkedin"/></a>
                            </div>)}
                        </div>);
    return (
        <> 
            <div className='page'>
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
                    THE SECRETARIAT
                </div>}
                <div className="list_people">
                    
                        {listItems}
                    
                </div>
            </div>

        </>
    );
}
