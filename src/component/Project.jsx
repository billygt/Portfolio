import myPortfolio from "../img/portfolio.jpg"
import Galeria from "../img/Galeria.JPG"
import eCommerce from "../img/e-commerce.jpg"
import forumImg from "../img/forum.jpg"
import blogImg from "../img/blog.jpg"

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
                    <img src={eCommerce} alt="" />
                </div>
                <div>
                    <h2>2018</h2>
                    <h3>Front Forum</h3>
                    <span>HTML&CSS, JavaScript</span>
                    <img src={forumImg} alt="" />
                </div>
                <div>
                    <h2>2019</h2>
                    <h3>Front Blog</h3>
                    <span>HTML&CSS, JavaScript</span>
                    <img src={blogImg} alt="" />
                </div>
                <div>
                    <h2>2019</h2>
                    <h3>Site Vitrine</h3>
                    <span>WordPress</span>
                    <img src={blogImg} alt="" />
                </div>
                <div>
                    <h2>2019</h2>
                    <h3>Blog</h3>
                    <span>WordPress</span>
                    <img src={blogImg} alt="" />
                </div>
                <div>
                    <h2>2020</h2>
                    <h3>E-commerce</h3>
                    <span>WordPress</span>
                    <img src={eCommerce} alt="" />
                </div>
                <div>
                    <h2>2022</h2>
                    <h3>Site Galérie d'image</h3>
                    <span>React JS</span>
                    <img src={Galeria} alt="" />
                </div>
                <div>
                    <h2>2023</h2>
                    <h3>Portfolio</h3>
                    <span>React JS</span>
                    <img src={myPortfolio} alt="" />
                </div>
            </div>
        </div>
    )
}