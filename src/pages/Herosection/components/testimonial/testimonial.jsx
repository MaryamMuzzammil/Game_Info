import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../../Firebase/config";
import "../../../../assets/css/herosection/testimonial.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const q = query(collection(db, "testimonials"), orderBy("uploadedAt", "asc"));
        const res = await getDocs(q);
        const testimonialArray = res.docs.map((doc) => ({
          id: doc.id,
          quote: doc.data().quote || "No Quote",
          writer_name: doc.data().writer_name || "Anonymous",
          writer_about: doc.data().writer_about || "No Information",
          writer_picture: doc.data().writer_picture || "",
        }));

        setTestimonials(testimonialArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 9600);
      
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  if (loading) {
    return <p>Loading testimonials...</p>;
  }

  if (testimonials.length === 0) {
    return <p>No testimonials available.</p>;
  }

  const { quote, writer_name, writer_about, writer_picture } = testimonials[index];

  return (
    <section className="feedback">
      <div className="container text-center common-title fw-bold">
        <h2 className="common-heading fw-bolder mb-4">TESTIMONIALS</h2>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="testimonial-container">
        <div className="progress-bar"></div>
        <div className="fas fa-quote-right fa-quote"></div>
        <div className="fas fa-quote-left fa-quote"></div>
        <p
          className="testimonial"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          "{quote}"
        </p>
        <div className="user">
          <img src={writer_picture} alt={writer_name} className="user-image" />
          <div
            className="user-details"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <h4 className="username">{writer_name}</h4>
            <p className="role">{writer_about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
