import gmailIcon from "../img/gmail.png";
import linkedinIcon from "../img/linkedin.png";
import facebookIcon from "../img/facebook.png";

export default function Icones() {
    return(
        <div className="icones">
            <a href="#contact"><img src={gmailIcon} alt="Gmail" /></a>
            <a href=""><img src={linkedinIcon} alt="Linkedin" /></a>
            <a href=""><img src={facebookIcon} alt="Facebook" /></a>
        </div>
    )
}