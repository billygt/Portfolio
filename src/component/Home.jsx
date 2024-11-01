import Billy from "../img/billy.jpg"

export default function Home() {
    return(
        <>
        <h1>Home</h1>
        <div className="home-container" id="home">
            
            <div className="bloc1">
                <img alt="TSILAVO Miharivelo Billy" className="billy-img" src={Billy} />
                <h2 className="name">TSILAVO <span className="surname">Miharivelo Billy</span>
                </h2>
                <span className="web-dev">Développeur 
                    <span className="front-end"> Front-End</span>
                </span>
                <a className="download-cv" href="https://drive.google.com/file/d/1V9rExNEV_CS5CY1cx_xvqugv19lqhlsF/view?usp=sharing">Télécharger mon CV</a>
            </div>
            {/* <div className="bloc2">
            </div> */}
        </div>
        </>
    )
}
