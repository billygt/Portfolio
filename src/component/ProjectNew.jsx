import myPortfolio from "../img/portfolio.jpg"
import Galeria from "../img/Galeria.JPG"
import eCommerce from "../img/e-commerce.jpg"
import forumImg from "../img/forum.jpg"
import blogImg from "../img/blog.jpg"

export default function Project() {
    

    return(
        <div className="projects" id="project">
        <div className="separate"></div>
        <h2 className="title-profil">Projets</h2>
        <div class="wrapper">
        <i id="left" className="icon-left-right fa-solid  fas fa-angle-left"></i> 
            <ul className="carousel"> 
                <li className="card"> 
                <div className="img"><img src={myPortfolio} alt="" draggable="false" /> </div> 
                    <h2> 
                        Portfolio
                    </h2> 
                    <span><i class="fa-brands fa-react"></i> ReactJS</span> 
                </li> 
                <li className="card"> 
                <div className="img"><img src={Galeria} alt="" draggable="false" /> </div> 
                    <h2>Galérie d'image</h2>
                    <span><i class="fa-brands fa-react"></i> ReactJS</span> 
                </li> 
                <li className="card"> 
                <div className="img"><img src={eCommerce} alt="" draggable="false" /> </div> 
                    <h2>Site e-commerce</h2> 
                    <span><i class="fa-brands fa-react"></i> ReactJS</span> 
                </li> 
                <li className="card"> 
                <div className="img"><img src={forumImg} alt="" draggable="false" /> </div> 
                    <h2>Site forum</h2> 
                    <span><i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i> HTML&CSS et <i class="fa-brands fa-js"></i> JavaScript</span> 
                </li> 
                <li className="card"> 
                <div className="img"><img src={blogImg} alt="" draggable="false" /> </div> 
                    <h2>Blog</h2> 
                    <span><i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i> HTML&CSS et <i class="fa-brands fa-js"></i> JavaScript</span>  
                </li> 
                <li className="card"> 
                    <div class="img"><img src={myPortfolio} alt="" draggable="false" /> </div> 
                    <h2>Portfolio</h2> 
                    <span><i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i> HTML&CSS et <i class="fa-brands fa-js"></i> JavaScript</span> 
                </li> 
            </ul>
            <i id="right" className="icon-left-right fa-solid fas fa-angle-right"></i> 
	    </div>
        </div> 
    )
}