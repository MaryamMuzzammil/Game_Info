import { Link } from 'react-router-dom';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import About from './components/about/about';
import Sports from './components/sports/sports';
import Team from './components/team/team';
import Testimonial from './components/testimonial/testimonial';
const Banner =()=>{
return(
    <>
    <section id="Home">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner1} class="d-block w-100" alt="pic"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>If you Don’t Practice
                You Don’t Derserve
                to win!</h5>
              <p>The most important thing is to try and inspire people so that they can be great in whatever they want to do.</p>
              <Link to="/contact" class="btn btn-outline-warning fw-bold">CONTACT US</Link>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner2} class="d-block w-100" alt="pic"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>If you Don’t Practice
                You Don’t Derserve
                to win!</h5>
              <p>I really think a champion is defined not by their wins, but how they can recover when they fall.</p>
              <Link to="/contact" class="btn btn-outline-warning fw-bold">CONTACT US</Link>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner3}class="d-block w-100" alt="pic"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>If you Don’t Practice
                You Don’t Derserve
                to win!</h5>
              <p>If my mind can conceive it and my heart can believe it - then I can achieve it.</p>
                <Link to="/contact" class="btn btn-outline-warning fw-bold">CONTACT US</Link>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</section>
<About/>
<Sports/>
<Team/>
<Testimonial/>
</>
)
};
export default Banner;