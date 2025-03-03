import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../../../assets/images/about.jpg";
import volleyballImg from "../../../../assets/images/volleyball.jpg";
import tennisImg from "../../../../assets/images/tennis.jpg";
import '../../../../assets/css/herosection/about.css'

const About = () => {
  return (
    <>
      <section className="about-section">
        <div
          className="container text-center common-title fw-bold"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <h2 className="common-heading fw-bolder mb-4">
            ABOUT GAME INFO_____GAMING
          </h2>
          <p style={{ margin: "0 auto" }}>
            Be part of our growing community and never miss a moment of the
            action. Connect with us on Facebook, YouTube, Twitter, and LinkedIn.
            <br /> Join our newsletter and stay tuned for the latest in sports
            news and features.
          </p>
          <hr className="w-25 mx-auto" />
        </div>

        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <h1 className="fw-bolder text-capitalize common-heading">
                WELCOME TO YOU!
              </h1>
              <p className="about-title">
                At GAME INFO_____GAMING, we’re more than just a sports
                website—we’re a community of passionate fans, dedicated
                athletes, and sports enthusiasts. Founded in 2015, our mission
                is to bring the excitement and spirit of sports to every corner
                of the globe.
              </p>

              <h2 className="common-heading fw-bolder mb-4">Our Mission</h2>
              <p className="about-title">
                We are committed to delivering accurate, up-to-date, and
                engaging content that fuels your love for sports.
              </p>

              <h2 className="common-heading fw-bolder mb-4">What We Offer</h2>
              <p className="about-title">
                We’re dedicated to helping athletes of all levels reach their
                full potential. Whether you’re a beginner looking to get started
                or an experienced athlete aiming to refine your skills, we
                provide high-quality training resources and support to help you
                succeed.
              </p>
              <ul>
                <li style={{ color: "#fff", listStyleType: "circle",fontSize: "18px", textAlign:"start" }}>
                  <strong>Personalized Training Programs:</strong> Our expert
                  coaches design customized training plans tailored to your
                  specific needs and goals.
                </li>
                <br/>
                <li style={{ color: "#fff", listStyleType: "circle" ,fontSize: "18px",textAlign:"start"}}>
                  <strong>Expert Coaching:</strong> Benefit from the guidance of
                  seasoned professionals with years of experience in various
                  sports.
                </li>
                <br/>
                <li
                  style={{ color: "#fff", listStyleType: "circle",textAlign:"start" }}>
                  <strong>Interactive Training Sessions:</strong> Engage in live or on-demand
                  training sessions that provide hands-on instruction and feedback. Our sessions
                  cover a wide range of sports and fitness areas, ensuring you get the practice
                  you need.
                </li>
              </ul>

              <Link
                to="/gallery"
                className="text-capitalize about-btn btn-outline-warning"
                data-bs-toggle="tooltip"
                data-bs-title="Read More"
              >
                Read More
              </Link>
            </div>

            <div className="col-12 col-md-12 col-lg-6">
              <div className="text-center text-lg-end" data-aos="fade-down">
                <img src={aboutImg} alt="about" className="img-fluid" />
                <img src={volleyballImg} alt="volleyball" className="img-fluid" data-aos="fade-down" />
                <img src={tennisImg} alt="tennis" className="img-fluid" data-aos="fade-down" />
              </div>
            </div>
          </div>
        </div>

        {/* SVG Shape Divider */}
        <div className="custom-shape-divider-bottom-1725031319">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default About;
