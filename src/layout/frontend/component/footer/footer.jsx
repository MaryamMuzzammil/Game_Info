import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png"; // Corrected path
import volleyballImg from "../../../../assets/images/volleyball.jpg";
import swimmingImg from "../../../../assets/images/swimming.jpg";
import '../../../../assets/css/footer.css';



const Footer = () => {
  return (
    <>
      <footer className="footers">
        <div className="container">
          <div className="row">
            {/* Logo and Description */}
            <div className="col-md-6 col-lg-4">
              <div className="widget1">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </Link>
                </div>
                <p>
                  Be part of our growing community and never miss a moment of the action.
                  <br /> Connect with us on Facebook, YouTube, Twitter, and LinkedIn.
                  <br /> Join our newsletter and stay tuned for the latest sports news and features.
                </p>
                <div className="socialLinks">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://pk.linkedin.com/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.google.com/">
                        <i className="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Latest News Section */}
            <div className="col-md-6 col-lg-4">
              <div className="widget2">
                <h5>Latest News</h5>
                <div className="media">
                  <img className="img-fluid" src={volleyballImg} alt="Volleyball" />
                  <div className="media-body d-flex align-self-center">
                    <div className="content">
                      <Link to="/sports#Volleyball">
                        <p>Volleyball World Cup: Italy Triumphs in Thrilling Final!</p>
                      </Link>
                      <span>Aug 17, 2019</span>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <img className="img-fluid" src={swimmingImg} alt="Swimming" />
                  <div className="media-body d-flex align-self-center">
                    <div className="content">
                      <Link to="/sports#Swimming">
                        <p>Joshua Shatters Last Record at Our Swimming Competition!</p>
                      </Link>
                      <span>Aug 17, 2019</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-sm-6 col-lg-2">
              <div className="widget3">
                <h5>Quick Links</h5>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/sports">Sports</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/signin">Login</Link></li>
                </ul>
              </div>
            </div>

            {/* Game Links */}
            <div className="col-sm-6 col-lg-2">
              <div className="widget4">
                <h5>Game Links</h5>
                <ul>
                  <li><Link to="/sports#Football">Football</Link></li>
                  <li><Link to="/sports#Athletics">Athletics</Link></li>
                  <li><Link to="/sports#Chess">Chess</Link></li>
                  <li><Link to="/sports#Judo">Judo</Link></li>
                  <li><Link to="/sports#Volleyball">Volleyball</Link></li>
                  <li><Link to="/sports#Tennis">Tennis</Link></li>
                  <li><Link to="/sports#Golf">Golf</Link></li>
                  <li><Link to="/sports#MotorcycleRacing">Motorcycle Racing</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyRightArea">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <p>&copy; Copyright All Rights Reserved 2024.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
