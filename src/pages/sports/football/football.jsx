import React, { useState } from "react";
import "../../../assets/css/sports/sports.css"; // Ensure you import the CSS file
import team from '../../../assets/images/team.jpg'
const Football = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Q1. How many players play the game?",
      answer:
        "In football (soccer), each team has 11 players on the field at a time, making a total of 22 players. If you're considering substitutes, teams usually have a few additional players available on the bench, depending on the competition rules.",
    },
    {
      question: "Q2. Strategy of the game.",
      answer: (
        <>
          <h3>Key Strategies in Football</h3>
          <ul>
            <li><strong>Formations:</strong> Teams use specific formations (e.g., 4-4-2, 4-3-3) to organize players on the field.</li>
            <li><strong>Defensive Play:</strong> Pressing, zonal marking.</li>
            <li><strong>Attacking Play:</strong> Counter-attacking, possession play.</li>
            <li><strong>Set Pieces:</strong> Strategic plays for corners, free kicks.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Q3. Is it a team game?",
      answer:
        "Yes, football (soccer) is definitely a team game. It requires collaboration among players to achieve common goals, such as scoring and defending. Teamwork, communication, and coordination are key.",
    },
    {
      question: "Q4. Rules of the game.",
      answer: (
        <>
          <h3>Rules of the Game:</h3>
          <ul>
            <li><strong>Field of Play:</strong> Rectangular field with specific markings.</li>
            <li><strong>Players:</strong> Each team has 11 players.</li>
            <li><strong>Match Duration:</strong> 90 minutes, two halves.</li>
            <li><strong>Offside Rule:</strong> Prevents unfair advantage.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Q5. Important facts about the game?",
      answer: (
        <>
          <ul>
            <li><strong>Global Popularity:</strong> Most popular sport with 4 billion fans.</li>
            <li><strong>FIFA World Cup:</strong> Held every 4 years with 32 teams.</li>
            <li><strong>Iconic Players:</strong> Pelé, Maradona, Messi, Ronaldo.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="about-section" id="Football">
      <div className="container text-center common-title fw-bold">
        <h2 className="common-heading fw-bolder mb-4">SPORTS DETAILS</h2>
        <p style={{ margin: "0 auto" }}>
          Sports details provide essential insights into the game, including player statistics, team performance, and match highlights.
        </p>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
            <h2 className="common-heading fw-bolder mb-4">Football</h2>
            <p className="about-title">
            Football, known as soccer in some countries, is a dynamic and exhilarating sport that captivates millions worldwide. Played on a rectangular field with two teams of eleven players each, the objective is to score goals by getting the ball into the opposing team’s net. With its rich history dating back to ancient times, football has evolved into a global phenomenon, celebrated for its thrilling matches, passionate fans, and iconic tournaments like the FIFA World Cup. The game fosters teamwork, strategy, and athleticism, making it a beloved pastime and a powerful unifying force across cultures.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <img src={team} alt="Football Team" />
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

export default Football;
