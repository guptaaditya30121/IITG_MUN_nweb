import React, { useState, useEffect } from 'react'
import './Secretariat.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import sanityClient from "../../client";
import AOS from "aos";
import "aos/dist/aos.css"; 
import PersonImg from "../assets/person.png";
export default function Secretariat() {
    const [isHovering, setIsHovering] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [people, setPeople] = useState();
    const [alumni, setAlumni] = useState();

    useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "secretariat"]{
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
			.then((data) => setPeople(data))
			.catch(console.error);

            sanityClient
			.fetch(
				`*[_type == "alumni"]{
                    name,
                    post,
                    img_url,
                    status,
                    id,
                    alt,
                    tenure,
                }`
			)
			.then((data) => setAlumni(data))
			.catch(console.error);
	}, []);

    useEffect(() => {
        AOS.init({duration:2000});

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    
    return (
        <> 
            <div className='page'>
                {(screenWidth > 750) && <div className="eclipse"></div>}
                {(screenWidth > 750) && <div className="eclipse-2"></div>}
                {(screenWidth > 750) && <div className="heading1">
                    <div className="block1"></div>
                    <div className="text">
                        THE SECRETARIAT
                    </div>
                    <div className="block2"></div>
                </div>}
                {(screenWidth < 750) && <div className="text2">
                    THE SECRETARIAT
                </div>}
                <div className="list_people" data-aos="fade-up">
                    {people && 
                        people.map( (person) => (
                            <div className="profile" onMouseOver={()=>{person.status=0; setIsHovering(true); }} onMouseOut={()=>{person.status=1; setIsHovering(false);}}>
                            <img src={person.img_url || PersonImg} alt = {person.alt} className="prof_img"></img>
                            {person.status&& (<div className="initial">
                                <div className='info'>{person.name}</div>
                                <div className='subinfo'>{person.post}</div>
                            </div>)}
                            {person.status===0 && (<div className="final">
                                <div className='info2'>{person.name}</div>
                                <div className='subinfo2'>{person.post}</div>
                                <a href={person.link_insta} target="_blank"><InstagramIcon id="insta1" color='disabled'/></a>
                                <a href={person.link_linkedin} target="_blank"><LinkedInIcon id="linkedin"/></a>
                            </div>)}
                        </div>
                        ))
                    }
                    
                </div>
                {alumni && alumni.length>0 && (screenWidth > 750) && <div className="heading1" >
                    <div className="block1"data-aos="fade-up"></div>
                    <div className="text"data-aos="fade-up">
                        OUR ALUMNI
                    </div>
                    <div className="block2"data-aos="fade-up"></div>
                </div>}
                {alumni && alumni.length>0 && (screenWidth < 750) && <div className="text2"data-aos="fade-up">
                    OUR ALUMNI
                </div>}
                <div className="list_people" data-aos="fade-up">
                    {alumni && 
                        alumni.map( (person) => (
                            <div className="profile" onMouseOver={()=>{person.status=0; setIsHovering(true); }} onMouseOut={()=>{person.status=1; setIsHovering(false);}}>
                            <img
                                src={person.img_url || PersonImg}
                                alt = {person.alt}className="prof_img">
                            </img>
                            {person.status&& (<div className="initial">
                                <div className='info'>{person.name}</div>
                                <div className='subinfo'>{person.post} ({person.tenure})</div>
                            </div>)}
                            {person.status===0 && (<div className="final">
                                <div className='info2'>{person.name}</div>
                                <div className='subinfo2'>{person.post} ({person.tenure})</div>
                            </div>)}
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
