import Scroll from "./Scroll";

export default function Navbar() {

    const displayMenu = () => {
        const myMenu = document.querySelector('.nav');
        myMenu.style.transform = "translateX(0)";
        myMenu.classList.replace("hideMenu","displayMenu");
    }
    const hideMenu = () => {
        const myMenu = document.querySelector('.nav');
        myMenu.classList.add("hideMenu");
    }

    return(
        <>
            <a href="#" className="burger-menu" onClick={displayMenu}></a>
            <ul className='nav' onClick={hideMenu}>
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