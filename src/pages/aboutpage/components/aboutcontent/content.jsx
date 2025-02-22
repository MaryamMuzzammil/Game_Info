import "../../../../assets/css/About/aboutcontent.css";
import g12 from '../../../../assets/images/g12.jpg';
import billiard from '../../../../assets/images/billiards.jpg';
import swimming from '../../../../assets/images/swimming.jpg';
const AboutContent = () => {
    return (
      <section className="about-section">
        <div className="container text-center common-title fw-bold">
          <h2
            className="common-heading fw-bolder mb-4"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            OUR TRAINING SERVICES
          </h2>
          <p
            style={{ margin: "0 auto" }}
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            Be part of our growing community and never miss a moment of the action.
            Connect with us on Facebook, YouTube, Twitter, and LinkedIn. <br />
            Join our newsletter and stay tuned for the latest in sports news and features.
          </p>
          <hr className="w-25 mx-auto" />
        </div>
  
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <h2
                className="common-heading fw-bolder mb-4"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                What we offer...
              </h2>
              <p
                className="about-title"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                We’re dedicated to helping athletes of all levels reach their full potential.
                Whether you’re a beginner looking to get started or an experienced athlete aiming
                to refine your skills, we provide a range of high-quality training resources and
                support to help you succeed.
              </p>
  
              <ul>
                <li
                  style={{ color: "#fff", listStyleType: "circle" }}
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <strong>Personalized Training Programs:</strong> Our expert coaches design
                  customized training plans tailored to your specific needs and goals. Whether you’re
                  focusing on strength, speed, agility, or sport-specific skills, we create a program
                  that fits you.
                </li>
                <br />
                <li
                  style={{ color: "#fff", listStyleType: "circle" }}
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <strong>Expert Coaching:</strong> Benefit from the guidance of seasoned
                  professionals who bring years of experience and knowledge in various sports. Our
                  coaches are committed to helping you improve your performance with proven
                  techniques and strategies.
                </li>
                <br />
                <li
                  style={{ color: "#fff", listStyleType: "circle" }}
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <strong>Interactive Training Sessions:</strong> Engage in live or on-demand
                  training sessions that provide hands-on instruction and feedback. Our sessions
                  cover a wide range of sports and fitness areas, ensuring you get the practice
                  you need.
                </li>
                <br />
                <li
                  style={{ color: "#fff", listStyleType: "circle" }}
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <strong>Skill Development Workshops:</strong> Join our specialized workshops and
                  clinics to focus on particular skills or aspects of your game. From advanced
                  techniques to tactical training, our workshops are designed to elevate your
                  performance.
                </li>
                <br />
                <li
                  style={{ color: "#fff", listStyleType: "circle" }}
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <strong>Performance Tracking and Analysis:</strong> Utilize our advanced tools and
                  resources to track your progress and analyze your performance. Regular assessments
                  help you stay on track and make data-driven improvements.
                </li>
                <br />
                <li
                  style={{ color: "#fff", listStyleType: "circle" }}
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <strong>Nutritional Guidance:</strong> Understand the importance of nutrition in
                  your training regimen with our expert advice on meal planning, supplements, and
                  healthy eating habits to complement your athletic goals.
                </li>
                <br />
                <li
                  style={{ color: "#fff", listStyleType: "circle" }}
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <strong>Community and Support:</strong> Connect with fellow athletes and training
                  enthusiasts through our online community. Share experiences, get motivated, and
                  find support from like-minded individuals who share your passion.
                </li>
                <br />
                <li
                  style={{ color: "#fff", listStyleType: "circle" }}
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <strong>Resource Library:</strong> Access our comprehensive library of training
                  materials, including video tutorials, articles, and fitness guides. Stay informed
                  with the latest tips and trends in sports training.
                </li>
                <br />
                <li
                  style={{ color: "#fff", listStyleType: "circle" }}
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <strong>Flexible Scheduling:</strong> Enjoy the convenience of flexible training
                  schedules that fit around your busy life. Our online platform allows you to train
                  anytime, anywhere, ensuring you can always stay on top of your game.
                </li>
              </ul>
            </div>
  
            <div className="col-12 col-md-12 col-lg-6">
              <div className="text-center text-lg-end" data-aos="fade-down">
                <img src={billiard} alt="Billiards Training" />
                <img src={g12} alt="Sports Training" data-aos="fade-down" />
                <img src={swimming} alt="Swimming Training" data-aos="fade-down" />
              </div>
            </div>
          </div>
        </div>
  
        <div className="custom-shape-divider-bottom-1725031319">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    );
  };
  
  export default AboutContent;
  