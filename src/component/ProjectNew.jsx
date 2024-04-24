import myPortfolio from "../img/portfolio.jpg"
import Galeria from "../img/Galeria.JPG"
import eCommerce from "../img/e-commerce.jpg"
import forumImg from "../img/forum.jpg"
import blogImg from "../img/blog.jpg"

export default function Project() {
    return(
        <div className="projects">
        <div className="separate"></div>
        <h2 className="title-profil">Projets</h2>
        <div class="wrapper">
        <i id="left" class="fa-solid  fas fa-angle-left"></i> 
            <ul class="carousel"> 
                <li class="card"> 
                <div class="img"><img src={myPortfolio} alt="" draggable="false" /> </div> 
                    <h2> 
                        GeeksforGeeks 
                    </h2> 
                    <span>Coding Platform</span> 
                </li> 
                <li class="card"> 
                <div class="img"><img src={Galeria} alt="" draggable="false" /> </div> 
                    <h2>GeeksforGeeks</h2> 
                    <span>Coding Platform</span> 
                </li> 
                <li class="card"> 
                <div class="img"><img src={eCommerce} alt="" draggable="false" /> </div> 
                    <h2>GeeksforGeeks</h2> 
                    <span>Coding Platform</span> 
                </li> 
                <li class="card"> 
                <div class="img"><img src={forumImg} alt="" draggable="false" /> </div> 
                    <h2>GeeksforGeeks</h2> 
                    <span>Coding Platform</span> 
                </li> 
                <li class="card"> 
                <div class="img"><img src={blogImg} alt="" draggable="false" /> </div> 
                    <h2>GeeksforGeeks</h2> 
                    <span>Coding Platform</span> 
                </li> 
                <li class="card"> 
                    <div class="img"><img src={myPortfolio} alt="" draggable="false" /> </div> 
                    <h2>GeeksforGeeks</h2> 
                    <span>Coding Platform</span> 
                </li> 
            </ul>
            <i id="right" class="fa-solid fas fa-angle-right"></i> 
	    </div>
        </div> 
    )
}