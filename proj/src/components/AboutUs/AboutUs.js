import React, {useState, useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css"

const AboutUs = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
        AOS.init({duration:2000});
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
            <div className="pic">
                <img src = {require("../assets/aboutUs1.jpeg")}alt="Not found" data-aos="fade-right"></img>
                <img src = {require("../assets/aboutUs2.jpeg")}alt="Not found" data-aos ="fade-left"></img>
            </div>
            <div className="letter" data-aos="fade-up">
                <div className="letter-left">
                    <h2>A letter from our Secretary General</h2>
                    <div className="letter-block">
                        <div className="letter-left-block"></div>
                        <p>Dear Delegates,<br/><br/>

                        As the Secretary General of the IITG Model United Nations, Edition XV, I am pleased to be hosting you at the IIT Guwahati, during Alcheringa 2023, after two virtual years.<br/><br/>

                        The past two years have been nothing if not a testimony to what type of leadership our world needs. Hearing again and again, “the youth is the future,” we at the IITG Model United Nations strive to provide a platform for these minds of tomorrow to exercise their skills in situations that we face on an international and national level. Given that IITGMUN is organized solely by a team of passionate students from IIT, Guwahati, from different ethnic and academic backgrounds, we strive to bring pressing topics to the table for discussion. Over the years, we have successfully delivered thought-intensive conferences to novice as well as seasoned delegates.  
                        <br/><br/>
                        This year, as we prepare to host our 15th Edition, the contemporary world is plagued by recession, war, and insecurity for the sustenance of mere humanity. Building upon these pressing issues, our team, after intense scrutiny, has come up with namely three agendas, Canvassing Crisis: Getting ahead of economic recession, Deliberating Disarmament: Encouraging non-proliferation of Weapons of Mass destruction, and Redefining Family Laws: Dissecting Matrimonial Laws in India. 
                        <br/><br/>
                        We face these issues today and might face worse circumstances if not acted upon. As the leaders of tomorrow, we should strive to take responsible and decisive steps to make the world a better place for generations to come.
                        <br/><br/>
                        We, as a generation, are not void of opportunities; however, we are often hampered by crises beyond our control. Choices made by the world's leaders usually define the trajectory of the lives of millions of people. May it be a struggle to overcome oppression, war, recession, or pandemic, our world is put to the test time and time again. These leaders guide us through these crises, and we at IITGMUN work hard to provide a platform to build more such leaders to lead us into the future.
                        <br/><br/>
                        The past two years have been closed within the box of our virtual screens. Today we have the privilege to step out of that box into the world and shake hands with our comrades in our march to the best tomorrow possible. With this thought, I shall leave you, an esteemed group of delegates to deliberate, debate, and draft what you would want our world to look like. Looking forward to seeing you at the IITG campus, “What verse shall yours be?”.
                        <br/><br/>
                        Suhayl Mahek<br/>
                        Secretary General<br/>
                        IITGMUN Ed XV


                        </p>
                    </div>
                </div>
                <img src = {require("../assets/suhayl.jpeg")}alt="Not found" style={{width:'35%', height:'100%'}}></img>
            </div>
        </div>
     );
}
 
export default AboutUs;