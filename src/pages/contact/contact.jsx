import ContactForm from "./form/form";

const Contact = () => {
    return (
        <>
      <section>
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
              <h1 className="mainhero" data-aos="fade-right">CONTACT US</h1>
            </div>
          </div>
        </div>
      </section>
      <ContactForm/>
      </>
    );
  };
  
  export default Contact;
  