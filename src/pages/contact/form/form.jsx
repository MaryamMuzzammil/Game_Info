import '../../../assets/css/contact/contact.css'
const ContactForm = () => {
    return (
      <>
        <section className="contact" id="CONTACT">
          <div className="container mt-3 horizontal">
            <center>
              <h2>FILL THE FORM AND ENROLL NOW</h2>
            </center>
            <p
              style={{ margin: "0 auto", textAlign: "center" }}
              data-aos="fade-left"
            >
              We’d love to hear from you! Whether you have a question, feedback, or just want to get in touch, please
              reach out to us by filling the form which is mentioned below, <br /> or you can mail us by using our email
              address.
            </p>
            <hr className="w-25 mx-auto" />
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <form className="row g-2 needs-validation" noValidate>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">
                      First name
                    </label>
                    <input type="text" className="form-control" id="validationCustom01" required />
                    <div className="invalid-feedback">Please enter your first name.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">
                      Last name
                    </label>
                    <input type="text" className="form-control" id="validationCustom02" required />
                    <div className="invalid-feedback">Please enter your last name.</div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="validationCustomUsername" className="form-label">
                      Email Address
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <div className="invalid-feedback">Please enter your valid email address.</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">
                      City
                    </label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                    <div className="invalid-feedback">Please provide a valid city.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">
                      Select your slot
                    </label>
                    <select className="form-select" id="validationCustom04" required>
                      <option selected disabled value="">
                        
                      </option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                    <div className="invalid-feedback">Please choose your slot.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">
                      Qualification
                    </label>
                    <input type="text" className="form-control" id="validationCustom05" required />
                    <div className="invalid-feedback">Please enter your qualification.</div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                      <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                      </label>
                      <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-12">
                <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="800">
                  <iframe
                    title="Google Maps Location"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28946.577045477174!2d67.0914055!3d24.9210938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b808bfd6b1%3A0x997b1a02c2570822!2sGulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1725209392866!5m2!1sen!2s"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default ContactForm;
  