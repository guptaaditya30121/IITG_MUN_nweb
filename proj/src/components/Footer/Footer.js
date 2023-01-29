import React from "react";
import { useState,useEffect } from "react";
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    const [logo,setLogo] = useState();
    const [wp,setWp]=useState();
    useEffect(() => {
        if(document.body.className==="light-theme")
        {
            setLogo(require("../assets/light_footer.png"));
            setWp(require("../assets/logo_wordpress_light.png"));
        }
        else
        {
            setLogo(require("../assets/dark_footer.png"));
            setWp(require("../assets/logo_wordpress_dark.png"));
        }
    
      },[])

    const mutationObserve = new MutationObserver(entries =>{
        if(document.body.className==="light-theme")
        {
            setLogo(require("../assets/light_footer.png"));
            setWp(require("../assets/logo_wordpress_light.png"));
        }
        else
        {
            setLogo(require("../assets/dark_footer.png"));
            setWp(require("../assets/logo_wordpress_dark.png"));
        }
    })
    mutationObserve.observe(document.body,{attributes:true});
    return ( 
        <div className="footer">
            <img src = {logo} alt ="not_found"></img>
            <div className="icons">
                <TwitterIcon id = "twitter" />
                <FacebookIcon id = "facebook"/>
                <InstagramIcon id = "insta"/>
                <img src={wp} alt='notfound'></img>
            </div>
            <div>
                <p>Developed by <a href="www.linkedin.com/in/sahil2609" target="_blank">Sahil</a>, <a href="https://www.linkedin.com/in/ketan-singh-71bb40230/" target="_blank">Ketan</a> and <a href="https://www.linkedin.com/in/aditya-gupta-07962222a" target="_blank">Aditya</a></p>
                <p>Designed by <a href="https://www.behance.net/adithyansunilk" target="_blank">Adi</a></p>
                <p>Conference Hall, IIT Guwahati, North Guwahati,</p>
                <p>Guwahati, Assam 781039</p>
            </div>
        </div>
     );
}
 
export default Footer;