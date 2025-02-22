import React, { useState } from "react";
import "../../../assets/css/sports/sports.css"; // Ensure you import the CSS file
import judo from '../../../assets/images/judo.jpg'
const Judo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Q1. How many players play the game?",
      answer:
        "Judo is typically practiced as a one-on-one sport, so each match involves two players. However, millions of people around the world train in judo, ranging from beginners to advanced practitioners. The exact number can vary widely depending on the region and the popularity of the sport, but globally, it's estimated that there are over 20 million judo practitioners.",
    },
    {
      question: "Q2. Strategy of the game.",
      answer: (
        <>
          <h3>Key Strategies in Football</h3>
          <ul>
            <li><strong>Positioning:</strong>  Maintain a strong stance and optimal distance.</li>
            <li><strong>Timing:</strong>Anticipate and react to your opponent’s movements.</li>
            <li><strong>Balance Breaking:</strong> Disrupt your opponent's balance to facilitate throws.</li>
            <li><strong>Feints :</strong> Use fake attacks to create openings.</li>
            <li><strong>Adaptability :</strong> Adjust tactics based on your opponent’s style.</li>
            <li><strong>Energy Management :</strong>Conserve energy for critical moments.  </li>
            <li><strong>Grip Control :</strong>  Use strong grips to influence your opponent’s movements. </li>
          </ul>
        </>
      ),
    },
    {
      question: "Q3. Is it a team game?",
      answer:
        "No, judo is primarily an individual sport. Each match involves two competitors, and success is determined by the skill and strategy of the individual judoka. However, judo can be part of team competitions, where athletes from a club or country compete against others, but the matches themselves are still one-on-one.",
    },
    {
        question: "Q4. Rules of the game.",
        answer: (
          <>
            <p>Here are the key rules of judo briefly:</p>
            <ul>
              <li><strong>Match Duration:</strong> Typically four minutes, with potential extensions for golden score if tied.</li>
              <li><strong>Scoring:</strong> Ippon wins the match, while two Waza-ari equal an Ippon.</li>
              <li><strong>Legal Techniques:</strong> Throws, pins, and joint locks are allowed; strikes are prohibited.</li>
              <li><strong>Attire:</strong> Competitors must wear a proper judogi.</li>
              <li><strong>Conduct:</strong> Respectful behavior is required, with bows before and after matches.</li>
              <li><strong>Penalties:</strong> Infractions like stalling can result in penalties affecting scoring.</li>
            </ul>
          </>
        ),
      },
      {
        question: "Q5. What are some important facts about the game?",
        answer: (
          <>
            <p>Here are some important facts about judo:</p>
            <ul>
              <li><strong>Origin:</strong> Founded in Japan by Jigoro Kano in 1882, evolving from jiu-jitsu.</li>
              <li><strong>Olympic Sport:</strong> Became an Olympic event for men in 1964 and women in 1992.</li>
              <li><strong>Weight Classes:</strong> Competitors are grouped by weight for fairness.</li>
              <li><strong>Belts and Ranking:</strong> Practitioners progress through colored belts, starting from white to black.</li>
              <li><strong>Technique Over Strength:</strong> Focuses on skill and balance, making it accessible to all.</li>
              <li><strong>Global Popularity:</strong> Millions practice worldwide, especially in Japan, France, and Brazil.</li>
              <li><strong>Philosophy:</strong> Promotes values like respect and discipline.</li>
              <li><strong>Safety:</strong> Emphasizes controlled techniques to minimize injury.</li>
            </ul>
          </>
        ),
      },
    ];
  

  return (
    <section className="about-section" id="judo">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
            <h2 className="common-heading fw-bolder mb-4">Judo</h2>
            <p className="about-title">
            Judo is a Japanese martial art and Olympic sport focused on throwing, pinning, and submitting opponents. Founded by Jigoro Kano, it emphasizes technique and strategy over strength. Practitioners wear a judogi and train in techniques categorized into throwing (nage-waza), ground grappling (ne-waza), and joint locks (kansetsu-waza). Judo also promotes values like respect and discipline.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <img src={judo} alt="judo"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header" onClick={() => toggleAccordion(index)}>
                {item.question} 
                <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>▼</span>
              </h2>
              <div className={`accordion-content ${activeIndex === index ? "open" : ""}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judo;
