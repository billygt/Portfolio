import profilePhoto from "../img/me.jpg"

export default function Profil() {
    return(
        <div id="my-profil">
        <div className="separate hided"></div>
        <h2 className="title-profil">Profil</h2>
        <div className="part-2-profil">
        <h3>A propos de moi</h3>
        <p>Je m'appelle TSILAVO Miharivelo <span>Billy</span>.</p>
                    <p>Je suis passioné de <span>nouvelle technologie</span> depuis
                        mon enfance. Je me suis plongé dans le monde
                        du <span>developpement web</span> depuis que
                        j'ai intégré <a className="lien-estiim" href="http://www.estiim.net/"><span>'ESTIIM'</span></a> en tant qu'étudiant
                        en informatique. Après <span>deux ans</span> d'étude.
                        J'ai commencé à travailler en tant que technicien 
                        informatique et en réalisant des projets personnels 
                        comme des sites vitrines, des sites e-commerce en local.
                        Puis, j'ai travailler en tant que développeur web en freelance.
                        Et actuellement, je travaille en tant <span>qu'intégrateur web</span>.
                    </p>
                    <p>Je n'arrête pas de développer mes compétences
                        en adoptant tous les moyens possible, surtout la réalisation
                        de projets personnels.
                    </p>
        </div>
        <div className="profil">
            <div className="img-m">
                <img src={profilePhoto} alt="profil" />
            </div>
            <div className="txt-m">
                <div className="texte">
                    <h2 className="title">Developpeur Front-end</h2>
  

                    <p>
                    Pour moi, <span>la compétence</span> ne suffit pas pour être <span>développeur web</span> front end.
                    C'est comme <span>un art</span> donc il faut aussi de la passion et surtout
                    de l'empathie envers les internautes.
                </p>
                <p>
                    En tant que passioné d'informatique et précisement
                    de <span>développement web et mobile</span> depuis très longtemps, c'est pour
                    moi un domaine dans quoi j'arrive à m'épanouir, à me dépasser
                    et à mettre en oeuvre <span>ma créativité</span>.
                </p>
                <p>
                    Actuellement, j'ai travaillé comme développeur web front-end depuis trois
                    ans. J'ai déjà travaillé sur 5 grands projets et de nombreux projets.
                </p>
                    </div>
            </div>
        </div>
        
        </div>
    )
}