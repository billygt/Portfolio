export default function Skills() {
    return(
        <div id="my-skill">
            <div className="separate"></div>
            <h2 className="title-profil">Compétence</h2>
            <div className="skill">
                <div className="txt-s">
                    <h3 className="langage">Langage de programmation</h3>
                    <div className="element">
                        <label>HTML5 & CSS3</label>
                        <input type="range" className="hc" name="" id="" value="100" />
                    </div>
                    <div className="element">
                        <label>Bootstrap</label>
                        <input type="range" className="hc" name="" id="" value="90" />
                    </div>
                    <div className="element">
                        <label>JavaScript</label>
                        <input type="range" name="" id="" value="80" />
                    </div>
                    <div className="element">
                        <label>TypeScript</label>
                        <input type="range" name="" id="" value="70" />
                    </div>
                    <div className="element">
                        <label>PHP & MySQL</label>
                        <input type="range" name="" id="" value="50" />
                    </div>
                    <h3>Librairie</h3>
                    <div className="element">
                        <label>React.JS</label>
                        <input type="range" name="" id="" value="85" />
                    </div>
                    <h3>CMS</h3>
                    <div className="element">
                        <label>WordPress</label>
                        <input type="range" name="" id="" value="85" />
                    </div>
                </div>
                <div className="img-s">
                    <img src={process.env.PUBLIC_URL + `./skill.jpg`} />
                </div>
            </div>
            <h2 className="title-profil">Diplôme</h2>
            <div className="study">
                <div className="img-study">
                    <img src={process.env.PUBLIC_URL + `./etude.jpg`} />
                </div>
                <div className="txt-study">
                    <p></p>
                </div>
            </div>
        </div>
    )
}