export default function Project() {
    return(
        <div className="project-container" id="project">
            <div className="separate"></div>
            <h2 className="title-profil">Projets</h2>
            <div className="list-project">
                <div>
                    <h2>2018</h2>
                    <h3>Front Site E-commerce</h3>
                    <span>HTML&CSS, JavaScript</span>
                    <img src={process.env.PUBLIC_URL + `./skill.jpg`} alt="" />
                </div>
                <div>
                    <h2>2018</h2>
                    <h3>Front Forum</h3>
                    <span>HTML&CSS, JavaScript</span>
                    <img src={process.env.PUBLIC_URL + `./skill.jpg`} alt="" />
                </div>
                <div>
                    <h2>2019</h2>
                    <h3>Front Blog</h3>
                    <span>HTML&CSS, JavaScript</span>
                    <img src={process.env.PUBLIC_URL + `./skill.jpg`} alt="" />
                </div>
                <div>
                    <h2>2019</h2>
                    <h3>Site Vitrine</h3>
                    <span>WordPress</span>
                    <img src={process.env.PUBLIC_URL + `./skill.jpg`} alt="" />
                </div>
                <div>
                    <h2>2019</h2>
                    <h3>Blog</h3>
                    <span>WordPress</span>
                    <img src={process.env.PUBLIC_URL + `./skill.jpg`} alt="" />
                </div>
                <div>
                    <h2>2020</h2>
                    <h3>E-commerce</h3>
                    <span>WordPress</span>
                    <img src={process.env.PUBLIC_URL + `./skill.jpg`} alt="" />
                </div>
                <div>
                    <h2>2020</h2>
                    <h3>Front Blog</h3>
                    <span>React JS</span>
                    <img src={process.env.PUBLIC_URL + `./skill.jpg`} alt="" />
                </div>
                <div>
                    <h2>2022</h2>
                    <h3>Site Galérie d'image</h3>
                    <span>React JS</span>
                    <img src={process.env.PUBLIC_URL + `./skill.jpg`} alt="" />
                </div>
                <div>
                    <h2>2023</h2>
                    <h3>Portfolio</h3>
                    <span>React JS</span>
                    <img src={process.env.PUBLIC_URL + `./skill.jpg`} alt="" />
                </div>
            </div>
        </div>
    )
}