import teamgirl from '../../../../assets/images/teamgirl.jpg';
import chess from '../../../../assets/images/chess.jpg';
import volleyball from '../../../../assets/images/volleyball2.jpg';
import athletics from '../../../../assets/images/athletics.jpg';
import banner2 from '../../../../assets/images/banner2.jpg';
import swimming from '../../../../assets/images/swimming.jpg';
import judo from '../../../../assets/images/judo.jpg';
import billiard from '../../../../assets/images/billiards.jpg';
import tennis from '../../../../assets/images/tennis.jpg';
import golf from '../../../../assets/images/golf.jpg';
import cycling from '../../../../assets/images/cycling.jpg';
import '../../../../assets/css/herosection/sports.css'
const Sports = () => {
  return (
    <>
      <section className="sports-section" id="Sports">
      <div className="container text-center common-title fw-bold">
        <h2 className="common-heading fw-bolder mb-4">SPORTS & GAMES</h2>
        <p style={{margin: "0 auto"}}>Playing sports helps you stay in shape, teaches you how to organize your time, boosts friendships, and builds relationships with your peers and adults. Through athletics, you gain skills that can best be acquired on a court, track, or field.</p>
        <hr className="w-25 mx-auto"/>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-12">
            <div className="text-center card-box rounded-2 p-5 sportGames"data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">
              <img src={teamgirl} alt="team" className="img-fluid" style={{width:"200px"}}/>
              <h5 className="my-3 fw-normal">OUR FOOTBALL TEAM</h5>
              <p className="mb-5">Football is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms.</p>
              <div className="d-flex justify-content-center align-item-center">
                <a href="./sports/index.html#Football" className="icon-span rounded-2 bg-warning w-50">
                 Read more  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-12">
            <div className="text-center card-box rounded-2 p-5 sportGames" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">
              <img src={chess} alt="team" className="img-fluid" style={{width:"200px"}}/>
              <h5 className="my-3 fw-normal">OUR CHESS CHAMPION</h5>
              <p className="mb-5">Chess is a board game played between two players that simulates a war between two kingdoms. It is one of the most popular games in the world.</p>
              <div className="d-flex justify-content-center align-item-center">
                <a href="./sports/index.html#Chess" className="icon-span rounded-2 bg-warning w-50">
                  Read more  <i className="fa-solid fa-arrow-right-long"></i>
                 </a>
              </div>
            </div>
          </div>
              <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5 sportGames" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800">
                  <img src={volleyball} alt="team" className="img-fluid" style={{ width:"200px"}}/>
                  <h5 className="my-3 fw-normal">OUR VOLLEYBALL TEAM</h5>
                  <p className="mb-5">Volleyball is a non-invasive sports game of a net type where there are two competing teams of six members who control the ball with parts of their body</p>
                  <div className="d-flex justify-content-center align-item-center">
                    <a href="./sports/index.html#Volleyball" className="icon-span rounded-2 bg-warning w-50">
                      Read more  <i className="fa-solid fa-arrow-right-long"></i>
                     </a>
                  </div>
                </div>
              </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-12">
            <div className="text-center card-box rounded-2 p-5 sportGames" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">
              <img src={athletics} alt="team" className="img-fluid" style={{ width:"200px"}}/>
              <h5 className="my-3 fw-normal">OUR ATHLETICS TEAM</h5>
              <p className="mb-5">Athletics is a group of sporting events that involves competitive running, jumping, throwing, and walking. The most common types....</p>
              <div className="d-flex justify-content-center align-item-center">
                <a href="./sports/index.html#Athletics" className="icon-span rounded-2 bg-warning w-50">
                  Read more  <i className="fa-solid fa-arrow-right-long"></i>
                 </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-12">
            <div className="text-center card-box rounded-2 p-5 sportGames" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">
              <img src={banner2} alt="team" className="img-fluid" style={{width:"200px"}}/>
              <h5 className="my-3 fw-normal">OUR BADMINTON TEAM</h5>
              <p className="mb-5">Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams and with two person. </p>
              <div className="d-flex justify-content-center align-item-center">
                <a href="./sports/index.html#Badminton" className="icon-span rounded-2 bg-warning w-50">
                  Read more  <i className="fa-solid fa-arrow-right-long"></i>
                 </a>
              </div>
            </div>
          </div>
              <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5 sportGames"data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800">
                  <img src={swimming} alt="team" className="img-fluid"style={{ width:"200px"}}/>
                  <h5 className="my-3 fw-normal">OUR SWIMMING COMPETITION</h5>
                  <p className="mb-5">Swimming is the self-propulsion of a person through water, or other liquid, usually for recreation, sport, exercise, or survival.</p>
                  <div className="d-flex justify-content-center align-item-center">
                    <a href="./sports/index.html#Swimming" className="icon-span rounded-2 bg-warning w-50">
                      Read more  <i className="fa-solid fa-arrow-right-long"></i>
                     </a>
                  </div>
                </div>
              </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-12">
            <div className="text-center card-box rounded-2 p-5 sportGames"data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">
              <img src={judo} alt="team" className="img-fluid" style={{ width:"200px"}}/>
              <h5 className="my-3 fw-normal">OUR JUDO CHAMPION</h5>
              <p className="mb-5">Judo is an unarmed modern Japanese martial art, Olympic sport, and the most prominent form of jacket wrestling competed internationally.</p>
              <div className="d-flex justify-content-center align-item-center">
                <a href="./sports/index.html#Judo" className="icon-span rounded-2 bg-warning w-50">
                  Read more  <i className="fa-solid fa-arrow-right-long"></i>
                 </a>
              </div>
            </div>
          </div>
              <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5 sportGames" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800">
                  <img src={billiard} alt="team" className="img-fluid" style={{width:"200px"}}/>
                  <h5 className="my-3 fw-normal">OUR BILLIARDS CHAMPIONS</h5>
                  <p className="mb-5">Billiard games played on a rectangular table with a designated number <br/> of small balls and a long stick called a cue.</p>
                  <div className="d-flex justify-content-center align-item-center">
                    <a href="./sports/index.html#Billiards" className="icon-span rounded-2 bg-warning w-50">
                      Read more  <i className="fa-solid fa-arrow-right-long"></i>
                     </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5 sportGames" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800">
                  <img src={tennis} alt="team" className="img-fluid" style={{ width:"200px"}}/>
                  <h5 className="my-3 fw-normal">OUR TENNIS TEAM</h5>
                  <p className="mb-5">Tennis is a racket sport that is played either individually against a single opponent (singles) or between two teams of two players each (doubles).</p>
                  <div className="d-flex justify-content-center align-item-center">
                    <a href="./sports/index.html#Tennis" className="icon-span rounded-2 bg-warning w-50">
                      Read more  <i className="fa-solid fa-arrow-right-long"></i>
                     </a>
                  </div>
                </div>
              </div>
        </div>
        <div className="row justify-content-center align-item-center">
          <div className="col-12 col-lg-4 col-md-12">
            <div className="text-center card-box rounded-2 p-5 sportGames" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">
              <img src={golf} alt="team" className="img-fluid" style={{ width:"200px"}}/>
              <h5 className="my-3 fw-normal">OUR GOLF CHAMPION</h5>
              <p className="mb-5">Golf, a cross-country game in which a player strikes a small ball with various clubs from a series of starting points into a series of holes on a course.</p>
              <div className="d-flex justify-content-center align-item-center">
                <a href="./sports/index.html#Golf" className="icon-span rounded-2 bg-warning w-50">
                  Read more  <i className="fa-solid fa-arrow-right-long"></i>
                 </a>
              </div>
            </div>
          </div>
              <div className="col-12 col-lg-4 col-md-12">
                <div className="text-center card-box rounded-2 p-5 sportGames" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800">
                  <img src={cycling}alt="team" className="img-fluid" style={{width:"200px"}}/>
                  <h5 className="my-3 fw-normal">OUR MOTORCYCLE RACING</h5>
                  <p className="mb-5">The motorcycle sport of racing includes motorcycle road racing and off-road racing, both either on circuits or open courses, and track racing.</p>
                  <div className="d-flex justify-content-center align-item-center">
                    <a href="./sports/index.html#Motorcycling" className="icon-span rounded-2 bg-warning w-50">
                      Read more  <i className="fa-solid fa-arrow-right-long"></i>
                     </a>
                  </div>
                </div>
              </div>
              </div>
        

      </div>
  
       
     </section>    </>
  );
};

export default Sports;
