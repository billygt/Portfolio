import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import skillImg from "../img/skill.jpg"
import graduationImg from "../img/etude.jpg"

export default function Skills() {

    return(
        <div id="my-skill">
            <div className="separate"></div>
            <h2 className="title-profil">Compétence</h2>
            <div className="skill">
                <div className="txt-s">
                    <h3 className="langage">Langages de programmation</h3>
                    <div className='programming-language'>
                        <div className="element">
                            <CircularProgressbar value={95} text={`${95}%`} />
                            <label className='htmlCSSLabel'>HTML5 & CSS3</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={90} text={`${90}%`} />
                            <label className='bootstrapLabel'>Bootstrap</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={80} text={`${80}%`} />
                            <label className='javascriptLabel'>JavaScript</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={70} text={`${70}%`} />
                            <label className='javascriptLabel'>TypeScript</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={50} text={`${50}%`} />
                            <label className='phpMysqlLabel'>PHP & MySQL</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={75} text={`${75}%`} />
                            <label className='reactJsLabel'>ReactJS</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={75} text={`${75}%`} />
                            <label className='reactJsLabel'>NextJS</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={75} text={`${75}%`} />
                            <label className='wordpressLabel'>WordPress</label>
                        </div>
                    </div>

                    
                    {/* <div className='libraryCMS'>
                        <div>
                            <h3>Librairies et Framework</h3>
                            <div className='library'>
                                
                            </div>
                        </div>
                        <div className='cms'>
                            <h3>CMS</h3>
                            
                        </div>
                    </div> */}


                </div>
                <div className="img-s">
                    <img src={skillImg} alt="etude" />
                </div>
            </div>
            <h2 className="title-profil">Diplôme</h2>
            <div className="study">
                <div className="img-study">
                    <img src={graduationImg} alt="etude" />
                </div>
                <div className="txt-study">
                    <div>
                    <h2>2017 - 2020</h2>
                    <h3>Dîplome de Technicien Supérieur en informatique (Bacc +2)</h3>
                    <p>Etude générale en informatique.<br/>
                    Initiation en <span>programmation</span>, 
                    en éléctronique (Maintenance et robotique), en maintenance 
                    hardware et software et en réseaux</p>
                    </div>
                    <div>
                        <h2>2017</h2>
                        <h3>Baccalauréat générale.</h3>
                        <p>Neuf matières à apprendre dont trois langues,
                            trois matières scientifiques, deux matières 
                            littéraires et une matière sportive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}