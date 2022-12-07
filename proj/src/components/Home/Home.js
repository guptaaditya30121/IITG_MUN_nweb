
import React from 'react';
import './Home.css';

const Home = () => {
    return ( 
        <div className="Home">
            <div className="hero">
                <img src={require('../assets/hero_img.png')} alt='not_found' id = "hero-img"></img>
                <div className= "mun">
                    <h2 id ="mun-1">IITG MUN</h2>
                    <h1 id = "mun-2">2023</h1>
                    <h4 id = "mun-3">---EDITION XV---</h4>
                    <h4 id = "mun-4">3rd- 5th February</h4>
                </div>
            </div>
        </div>
     );
}
 
export default Home;