
import { useState,useEffect } from "react";
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    const [logo,setLogo] = useState();

    useEffect(() => {
        if(document.body.className==="light-theme")
        {
            setLogo(require("../assets/light_footer.png"));
        }
        else
        {
            setLogo(require("../assets/dark_footer.png"));
        }
    
      },[])

    const mutationObserve = new MutationObserver(entries =>{
        if(document.body.className==="light-theme")
        {
            setLogo(require("../assets/light_footer.png"));
        }
        else
        {
            setLogo(require("../assets/dark_footer.png"));
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
            </div>
        </div>
     );
}
 
export default Footer;