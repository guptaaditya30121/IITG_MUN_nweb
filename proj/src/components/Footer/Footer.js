
import "./Footer.css"

const Footer = () => {
    return ( 
        <div className="footer">
            <img src = {document.body.className==="light-theme"?require("../assets/light_footer.png"):require("../assets/dark_footer.png")} alt ="not_found"></img>
        </div>
     );
}
 
export default Footer;