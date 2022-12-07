
import React, {useState, useEffect} from 'react';
import './Home.css';

const Home = () => {
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
        <div className="Home">
            <div className="hero" id = {screenWidth>750?"desktop":"mobile"}>

                {(screenWidth > 750) && (<img src={require('../assets/hero_img.png')} alt='not_found' id = "hero-img"></img>)}
                <div className= "mun">
                    <h2 id ="mun-1">IITG MUN</h2>
                    <h1 id = "mun-2">2023</h1>
                    <h4 id = "mun-3">---EDITION XV---</h4>
                    <h4 id = "mun-4">3rd- 5th February</h4>
                </div>
            </div>
            <div className="quote">
                <h3>"That the powerfull play goes on, and you may contribute a verse"</h3>
                <h3 id = "quote-1">"What verse shall be yours?"</h3>
                <h4>O me! O life! Walt Whitman </h4>
                <h4>Dead Poets Society</h4>
            </div>
        </div>
     );
}
 
export default Home;