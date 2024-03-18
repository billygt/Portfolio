import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import skillImg from "../img/skill.jpg"
import graduationImg from "../img/etude.jpg"
import htmlCSS from "../img/htmlCss.png"

export default function Skills() {

    const percentage = 66;

    return(
        <div id="my-skill">
            <div className="separate"></div>
            <h2 className="title-profil">Compétence</h2>
            <div className="skill">
                <div className="txt-s">
                    <h3 className="langage">Langage de programmation</h3>
                    <div className='programming-language'>
                        <div className="element">
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            <label className='htmlCSSLabel'>HTML5 & CSS3</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            <label className='bootstrapLabel'>Bootstrap</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            <label className='javascriptLabel'>JavaScript</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            <label className='javascriptLabel'>TypeScript</label>
                        </div>
                        <div className="element">
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            <label className='phpMysqlLabel'>PHP & MySQL</label>
                        </div>
                    </div>
                    <div className='flex-column'>
                        <div>
                            <h3>Librairie</h3>
                            <div className="element">
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                <label className='reactJsLabel'>ReactJS</label>
                            </div>
                        </div>
                        <div>
                            <h3>CMS</h3>
                            <div className="element">
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                <label className='wordpressLabel'>WordPress</label>
                            </div>
                        </div>
                    </div>
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