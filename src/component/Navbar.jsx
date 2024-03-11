import Scroll from "./Scroll";

export default function Navbar() {


    return(
        <>
            <ul className='navbar'>
                <li><a className="a home" href='#home'>Home</a></li>
                <li><a className="a home" href='#my-profil'>Profil</a></li>
                <li><a className="a comp" href='#my-skill'>Compétence</a></li>
                <li><a className="a oeuvres" href="#project">Projets</a></li>
                <li><a className="a contact" href='#contact'>Contact</a></li>
            </ul>
            <Scroll />
        </>
    )
}