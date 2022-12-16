import React, {useState, useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Apply.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Apply = () => {
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
                <div className='text-about'>APPLY HERE</div>
                <div className="rightBlock"></div>
            </div>
            <div className='center'>
                <a href="#apply-blocks"><button className='apply-now'>Apply Now <ExpandMoreIcon/></button></a>
            </div>
            <div className="main-body">
                <div className="sub-body">
                    <div className="rev">
                        <img src={require('../assets/LokSabha.png')} alt='not_found'></img>
                        <h2>Lok Sabha</h2>
                    </div>
                    <div className="right-side">
                        <div className="content-right-block"></div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <h3>Agenda</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="sub-body">
                    <div className="rev">
                        <img src={require('../assets/UNGA.png')} alt='not_found'></img>
                        <h2 id='UNGA'>UNGA</h2>
                    </div>
                    <div className="right-side">
                        <div className="content-right-block"></div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <h3>Agenda</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="sub-body">
                    <div className="rev">
                        <img src={require('../assets/Eco.png')} alt='not_found'></img>
                        <h2 id='Eco'>ECOSOC</h2>
                    </div>
                    <div className="right-side">
                        <div className="content-right-block"></div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <h3>Agenda</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="apply-blocks" id="apply-blocks">
                <div className="apply-block" id="delegate">
                    <button>Apply</button>
                </div>
                <div className="apply-block" id="executive">
                    <button>Apply</button>
                </div>
                <div className="apply-block" id="ip">
                    <button>Apply</button>
                </div>
            </div>
        </div>
      );
}
 
export default Apply;
