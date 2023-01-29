import React, {useState, useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Apply.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Apply = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const[lok,setLok]=useState();
    const[eco,setEco]=useState();
    const[ung,setUng]=useState();
    useEffect(() => {

        if(document.body.className==="light-theme")
        {
            setLok(require("../assets/LokSabha_blue.png"));
            setUng(require('../assets/UNGA_blue.png'));
            setEco(require('../assets/Eco_blue.png'));
        }
        else
        {
            setLok(require('../assets/LokSabha.png'));
            setUng(require('../assets/UNGA.png'));
            setEco(require('../assets/Eco.png'));
        }

        AOS.init({duration:2000});
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
            setLok(require("../assets/LokSabha_blue.png"));
            setUng(require('../assets/UNGA_blue.png'));
            setEco(require('../assets/Eco_blue.png'));
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
                        <img src={ung} alt='not_found'></img>
                        <h2>UNGA - DISEC</h2>
                    </div>
                    <div className="right-side">
                        <div className="content-right-block"></div>
                        <div className="content">
                            <p>The UN General Assembly-DISEC is the first committee of the UNGA and it deals with disarmament and international security matters.</p>
                            <h3 style={{textAlign:'center'}}>Agenda</h3>
                            <p>Weapons of mass destruction have posed the greatest threat to mankind ever since their inception during the first world war and the catastrophical conclusion of the second.
                            Hence, the agenda for this committee aims at the discussion of an elaborate plan of action against WMD proliferation. This involves scrutinizing the activities of involved nations, 
                            reviewing the current treaties and laws pertaining to WMDs, making amendments to them and coming up with new innovative solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="sub-body">
                    <div className="rev">
                        <img src={ung} alt='not_found'></img>
                        <h2 id='UNGA'>UNGA - ECOFIN</h2>
                    </div>
                    <div className="right-side">
                        <div className="content-right-block"></div>
                        <div className="content">
                            <p>From a global pandemic to a large-scale war, the world has gone through some significant crises and turmoil in the recent past. 
                                This has led to severe global economic repercussions, like soaring energy prices, disrupted supply chains, increasing debt, and crippling economies. 
                                As economists and institutions worldwide warn of an impending recession and the possibility of another financial crisis, 
                                we must be proactive in negating the same if we are not able to avoid them entirely.</p>
                            <h3 style={{textAlign:'center'}}>Agenda</h3>
                            <p>The IITG Model United Nations brings you the agenda for the UNGA Second Committee - ECOFIN, which discusses issues related to the global economy and finance. 
                                Here, delegates will have the opportunity to discuss the causes, identify weaknesses and formulate a path forward that will ensure the continued growth and development of the global economy.</p>
                        </div>
                    </div>
                </div>
                <div className="sub-body">
                    <div className="rev">
                        <img src={lok} alt='not_found'></img>
                        <h2 id='Eco'>LOK SABHA</h2>
                    </div>
                    <div className="right-side">
                        <div className="content-right-block"></div>
                        <div className="content">
                            <p>The Constitution of India, implemented on 26th January 1949, resolved to constitute India as a Union of States and a sovereign, socialist, secular, democratic republic. Today, over a billion Indians practicing different religions and speaking different local languages coexist in harmony in the largest democracy. A population this diverse necessitates that laws of domestic relations should be in accordance with their faiths and appropriate to everyone.</p>
                            <h3 style={{textAlign:'center'}}>Agenda</h3><br/>
                            <p>The IITG Model United Nations proudly presents the agenda for Lok Sabha, Redefining Family Laws: Dissecting the Matrimonial Laws in India. It emphasizes taboos such as marital rape and same-sex marriage and concentrates on legal loopholes that deal with legal concerns that arise in families or other personal relationships.</p>
                            <p>Does custom override statutory family laws? Is a foreign divorce decree recognized by the Indian courts? Are civil partnerships legal in India? Can a single man have his own child through surrogacy? This February, answer all these questions as IITGMUN plans to analyze family laws and pass legislation to address their flaws.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="apply-blocks" id="apply-blocks">
                <div className="apply-block" id="delegate">
                    <button><a style={{textDecoration: 'None', color:"white"}} href="http://bit.ly/3WoCSeF" target="_blank">Apply</a></button>
                </div>
                <div className="apply-block" id="executive">
                    <button><a style={{textDecoration: 'None', color:"white"}} href="https://forms.gle/jtFYGLB2CR92yGzL9" target="_blank">Apply</a></button>
                </div>
                <div className="apply-block" id="ip">
                    <button><a style={{textDecoration: 'None', color:"white"}} href="https://forms.gle/jtFYGLB2CR92yGzL9" target="_blank">Apply</a></button>
                </div>
            </div>
        </div>
      );
}
 
export default Apply;
