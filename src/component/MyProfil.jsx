export default function Profil() {
    return(
        <div id="my-profil">
        <div className="separate"></div>
        <h2 className="title-profil">Profil</h2>
        <div className="profil">
            <div className="img-m">
                <img src={process.env.PUBLIC_URL + `./me.jpg`} />
            </div>
            <div className="txt-m">
                <div className="texte">
                    <h2 className="title">A propos de moi</h2>
                    <p>Je m'appelle TSILAVO Miharivelo <span>Billy</span>.</p>
                    <p>Je suis passionée d'informatique depuis
                        mon enfance. Je me suis plongé dans le monde
                        du <span>developpement web</span> depuis que
                        j'ai intégré l'ESTIIM' University en tant qu'étudiant
                        en informatique. Après deux ans 2 ans d'étude.
                        J'ai commencé à travailler en tant que technicien 
                        informatique et en réalisant des projets personnels 
                        comme des sites vitrines, des sites e-commerce en local.
                        Puis, j'ai travailler en tant que développeur web en freelance.
                        Et actuellement, je travaille en tant qu'intégrateur web.
                    </p>
                    <p>Je n'arrête pas de développer mes compétences
                        en adoptant tous les moyens possible, surtout la réalisation
                        de projets personnels.
                    </p>
                    </div>
            </div>
        </div>
        <h3>Developpeur Front-end</h3>
                <p>
                    Pour moi, <i>la compétence</i> ne suffit pas pour être <i>développeur web</i> front end.
                    C'est comme un art donc il faut aussi de la passion et surtout
                    de l'empathie envers les internautes.
                </p>
                <p>
                    Moi, je suis passioné d'informatique et précisement
                    le développement web depuis très longtemps.
                </p>
                <p>
                    Actuellement, j'ai travaillé comme développeur web front-end depuis trois
                    ans. J'ai déjà travaillé sur 5 grands projets et pas mal petit projet.
                </p>
        </div>
    )
}