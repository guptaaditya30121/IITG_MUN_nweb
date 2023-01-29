
import React, {useState, useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Home.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import {Link} from "react-router-dom";

const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [counter, setCounter] = useState(false)
    const[lok,setLok]=useState();
    const[eco,setEco]=useState();
    const[ung,setUng]=useState();
    useEffect(() => {
        AOS.init({duration:2000});

        if(document.body.className==="light-theme")
        {
            setLok(require("../assets/LokSabha_org.png"));
            setUng(require('../assets/UNGA_org.png'));
            setEco(require('../assets/Eco_org.png'));
        }
        else
        {
            setLok(require('../assets/LokSabha.png'));
            setUng(require('../assets/UNGA.png'));
            setEco(require('../assets/Eco.png'));
        }

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      },[])

      const mutationObserve = new MutationObserver(entries =>{
        if(document.body.className==="light-theme")
        {
            setLok(require("../assets/LokSabha_org.png"));
            setUng(require('../assets/UNGA_org.png'));
            setEco(require('../assets/Eco_org.png'));
        }
        else
        {
            setLok(require('../assets/LokSabha.png'));
            setUng(require('../assets/UNGA.png'));
            setEco(require('../assets/Eco.png'));
        }
    })
    mutationObserve.observe(document.body,{attributes:true});


    return ( 
        <div className="Home">
            {(screenWidth > 750) &&<div className="eclipse"></div>}
            {(screenWidth > 750) &&<div className="eclipse-2"></div>}
            <div className="hero" id = {screenWidth>750?"desktop":"mobile"}>

                {(screenWidth > 750) && (<img src={require('../assets/hero_img.png')} alt='not_found' id = "hero-img"></img>)}
                <div className= "mun" data-aos="fade-left">
                    <h2 id ="mun-1">IITG MUN</h2>
                    <h1 id = "mun-2">2023</h1>
                    <h4 id = "mun-3">---EDITION XV---</h4>
                    <h4 id = "mun-4">3rd- 5th February</h4>
                </div>
            </div>
            <div className="quote" data-aos="fade-in" >
                <h3  >"That the powerfull play goes on, and you may contribute a verse"</h3>
                <h3 id = "quote-1">"What verse shall be yours?"</h3>
                <h4>O me! O life! Walt Whitman </h4>
                <h4>Dead Poets Society</h4>
            </div>
            <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
            <div className="stats" >
                <div className="stat">
                    <h2>{counter &&<CountUp className="counting"start={0} end={800} duration={1.2} delay={0.2} />}+</h2>
                    <h4>Delegates</h4>
                    <h5>From all over india</h5>
                </div>
                <div className="stat">
                    <h2>{counter &&<CountUp className="counting"start={0} end={45} duration={1.2} delay={0.2} />}+</h2>
                    <h4>Executive Board</h4>
                    <h5>Overall</h5>
                </div>
                <div className="stat">
                    <h2>{counter &&<CountUp className="counting"start={0} end={35} duration={1.2} delay={0.2} />}+</h2>
                    <h4>International Press</h4>
                    <h5>From country and beyond</h5>
                </div>
            </div>
            </ScrollTrigger>
            <Link to="/apply" style={{textDecoration : 'none'}}>
                <div className="reviews" data-aos="fade-in">
                    <h2>Councils</h2>
                    <div className="review">
                        <div className="rev">
                            <img src={lok} alt='not_found'></img>
                            <h2>Lok Sabha</h2>
                        </div>
                        <div className="rev" >
                            <img src={ung} alt='not_found'></img>
                            <h2 id='UNGA'>UNGA</h2>
                        </div>
                        <div className="rev">
                            <img src={eco} alt='not_found'></img>
                            <h2 id='Eco'>ECOSOC</h2>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="reviews">
                <h2>Reviews</h2>
                <div className="review">
                    <div className="rev" data-aos="fade-right">
                        <div className="stars">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                        </div>
                        <p>"It's a fantastic forum for learning not just about current events, but also about how to explain your views and put them into words.." </p>
                        <h5>-Mohammad Rabey</h5>
                    </div>
                    <div className="rev"data-aos="fade-up">
                        <div className="stars">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                        </div>
                        <p>"Yes, the IITG MUN offers fantastic debates, but the best part has to be the people. We are bound together by the strongest connection of shared interests. During the conference, the most wonderful aspect is the continuous open discussion with individuals we only know by country names and the supporting MUN community.."  </p>
                        <h5>-Vikash Rahul</h5>
                    </div>
                    <div className="rev" data-aos="fade-left">
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