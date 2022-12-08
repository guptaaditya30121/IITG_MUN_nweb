
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
            <div className="stats">
                <div className="stat">
                    <h2>560+</h2>
                    <h4>Delegates</h4>
                    <h5>From all over india</h5>
                </div>
                <div className="stat">
                    <h2>35+</h2>
                    <h4>Executive Board</h4>
                    <h5>Overall</h5>
                </div>
                <div className="stat">
                    <h2>21+</h2>
                    <h4>International Press</h4>
                    <h5>From country and beyond</h5>
                </div>
            </div>
            <div className="reviews">
                <h2>Reviews</h2>
                <div className="review">
                    <div className="rev">
                        <div className="stars">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                        </div>
                        <p>"It's a really amazing platform to learn not only about the affairs of the world but also about how to articulate your thoughts and put them into words." </p>
                        <h5>-Vishwaprasanna Hariharan</h5>
                    </div>
                    <div className="rev">
                        <div className="stars">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                        </div>
                        <p>"Yes, the IITG MUN has amazing discussions, but the best part of this MUN has to be the people. We are united by the strongest bond of common interests. Continuous open dialogue with people we only know by country names during the conference and the supportive MUN community is, by far, its most beautiful part."  </p>
                        <h5>-Ariktha Srivathsan</h5>
                    </div>
                    <div className="rev">
                        <div className="stars">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                        </div>
                        <p>"A Great platform to gain knowledge about the way things are being operated in the real world and to discuss its pros and cons"  </p>
                        <h5>-Sudhanshu Bhatia</h5>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;