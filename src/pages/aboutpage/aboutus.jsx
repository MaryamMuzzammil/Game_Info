import '../../assets/css/About/aboutpage.css';
import AboutContent from './components/aboutcontent/content';
import Gallery from './components/gallery/gallery';
import YouTube from './components/ytvideo/ytvideo';
const AboutPage = () => {
    return (
        <>
      <section id="About">
        <div className="container-fluid text-center">
          <div className="row align-items-center">
            <div
              className="col-md-12 text-center d-flex hero"
              data-aos="zoom-in"
              style={{
                width: "100%",
                height: "300px",
                opacity: 0.7,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className="mainhero" data-aos="fade-right">
                ABOUT US
              </h1>
            </div>
          </div>
        </div>
      </section>
      <AboutContent/>
      <YouTube/>
      <Gallery/>
      </>
    );
  };
  
  export default AboutPage;
  
