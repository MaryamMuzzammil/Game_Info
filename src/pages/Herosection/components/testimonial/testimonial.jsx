import { useState, useEffect } from "react";
import '../../../../assets/css/herosection/testimonial.css';

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Satisfied Visitor",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "An incredible resource for sports fans! The content is always fresh, informative, and engaging. I love connecting with fellow enthusiasts here. Highly recommended!",
  },
  {
    name: "June Cha",
    position: "Satisfied Visitor",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Fantastic sports website! Always up-to-date with the latest news and insights. A must-visit for any sports lover!",
  },
  {
    name: "Iida Niskanen",
    position: "Satisfied Visitor",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Absolutely love this site! It’s my go-to for the latest sports updates and expert analysis. Highly recommend it!",
  },
  {
    name: "Renee Sims",
    position: "Satisfied Visitor",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "An amazing sports hub! Great insights and a lively community. I always find what I’m looking for!",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Satisfied Visitor",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "This site is a game-changer! Reliable news and engaging content make it my top choice for sports updates.",
  },
  {
    name: "Sasha Ho",
    position: "Satisfied Visitor",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "A fantastic platform for sports fans! The coverage is thorough, and I appreciate the diverse perspectives offered.",
  },
  {
    name: "Veeti Seppanen",
    position: "Satisfied Visitor",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "Always a pleasure to visit! The articles are well-written and keep me informed about all my favorite teams.",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 9600);

    return () => clearInterval(interval);
  }, []);

  const { name, position, photo, text } = testimonials[index];

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
          "{text}"
        </p>
        <div className="user">
          <img src={photo} alt={name} className="user-image" />
          <div
            className="user-details"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <h4 className="username">{name}</h4>
            <p className="role">{position}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
