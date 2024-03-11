export default function Icones() {
    return(
        <div className="icones">
            <a href="#contact"><img src={process.env.PUBLIC_URL + `/gmail.png`} alt="Gmail" /></a>
            <a href=""><img src={process.env.PUBLIC_URL + `linkedin.png`} alt="Linkedin" /></a>
            <a href=""><img src={process.env.PUBLIC_URL + `facebook.png`} alt="Facebook" /></a>
        </div>
    )
}