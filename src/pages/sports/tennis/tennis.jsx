import React, { useState } from "react";
import tennis from '../../../assets/images/tennis.jpg';
import '../../../assets/css/sports/sports.css';
const Tennis = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Q1. How many players play the game?",
      answer:
        "Tennis is primarily played between two players in singles matches or four players in doubles matches. While millions participate casually, professional tennis has about 1,000 ranked male and female players competing at the highest levels. Globally, it's estimated that tens of millions play tennis recreationally, making it one of the most popular sports worldwide.",
    },
    {
      question: "Q2. Strategy of the game.",
      answer: (
        <>
          <p>In tennis, key strategies include:</p>
          <ul>
            <li><strong>Court Positioning:</strong> Stay well-positioned to cover the court effectively.</li>
            <li><strong>Shot Selection:</strong> Target your opponent's weaknesses with varied shots.</li>
            <li><strong>Serve Strategy:</strong> Use different serves to disrupt the opponent's rhythm.</li>
            <li><strong>Baseline vs. Net Play:</strong> Choose between consistent baseline play and aggressive net approaches.</li>
            <li><strong>Pace Control:</strong> Alter the pace to unsettle your opponent.</li>
            <li><strong>Mental Game:</strong> Maintain focus and a positive mindset under pressure.</li>
            <li><strong>Reading Opponents:</strong> Anticipate shots based on your opponent's movements.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Q3. Is it a team game?",
      answer:
        "No, tennis is primarily an individual sport. It is usually played in singles (one player per side) or doubles (two players per side), but the competition is still focused on individual or pair performance rather than team dynamics. However, there are team competitions, such as the Davis Cup and Fed Cup, where national teams compete, but the matches themselves are still played in singles or doubles formats.",
    },
    {
        question: "Q4. Rules of the game.",
        answer: (
          <>
            <p>Here are the key rules of tennis briefly:</p>
            <ul>
              <li><strong>Scoring:</strong> Points are counted as 0, 15, 30, 40, and game. A player needs four points to win a game, and six games to win a set (with a two-game lead).</li>
              <li><strong>Serving:</strong> Players alternate serving, starting from behind the baseline. The serve must land in the opposite service box.</li>
              <li><strong>Gameplay:</strong> The ball must be hit before bouncing twice and must be returned within the opponent's court boundaries.</li>
              <li><strong>Let Serve:</strong> If the serve hits the net and lands in the correct box, it's replayed.</li>
              <li><strong>Fouls:</strong> Players cannot touch the net or cross the center line during play. Hitting out of bounds loses the point.</li>
              <li><strong>Tiebreaks:</strong> At 6-6 in a set, a tiebreak is played; the first to 7 points (with a two-point lead) wins the set.</li>
            </ul>
          </>
        ),
      },
      {
        question: "Q5. What are some important facts about the game?",
        answer: (
          <>
            <p>Here are some important facts about tennis:</p>
            <ul>
              <li><strong>Origins:</strong> Tennis began in France in the late 12th century as "jeu de paume."</li>
              <li><strong>Grand Slam Tournaments:</strong> The four major events—Australian Open, French Open, Wimbledon, and US Open—are the most prestigious.</li>
              <li><strong>Scoring System:</strong> Unique scoring (15, 30, 40) has historical roots from medieval games.</li>
              <li><strong>Professional Tours:</strong> The ATP (men) and WTA (women) tours feature top players competing globally.</li>
              <li><strong>Famous Players:</strong> Legends like Roger Federer and Serena Williams have greatly influenced the sport.</li>
              <li><strong>Global Popularity:</strong> Played in over 200 countries, with millions of players worldwide.</li>
              <li><strong>Mixed Doubles:</strong> Events allow male and female players to compete together.</li>
              <li><strong>Olympic Sport:</strong> Tennis has been part of the Olympics since 1988.</li>
            </ul>
          </>
        ),
      }
    ];

  return (
    <section className="about-section" id="tennis">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
            <h2 className="common-heading fw-bolder mb-4">Tennis</h2>
            <p className="about-title">
              Tennis is a racket sport played on a rectangular court, either as singles (one player per side) or doubles (two players per side). The goal is to hit a ball over a net into the opponent's court, scoring points when they fail to return it.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <img src={tennis} alt="Tennis" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header" onClick={() => toggleAccordion(index)}>
                {item.question} <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>▼</span>
              </h2>
              <div 
                className={`accordion-content ${activeIndex === index ? "open" : ""}`}
                style={{ maxHeight: activeIndex === index ? '500px' : '0px', transition: 'max-height 0.7s ease-out, padding 0.3s ease-out' }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tennis;
