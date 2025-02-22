import React, { useState } from "react";
import volleyball from "../../../assets/images/volleyball2.jpg";
import '../../../assets/css/sports/sports.css';
const Volleyball = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Q1. How many players play the game?",
      answer:
        "Volleyball is played with two teams, each typically consisting of six players, making a total of 12 players on the court during a match. However, teams can have additional players on the bench for substitutions, often bringing the total roster to around 12 to 15 players. In beach volleyball, teams are made up of two players each, resulting in a total of four players on the court for a match. Overall, while the number of players may vary by format, the standard for indoor volleyball is six per team.",
    },
    {
      question: "Q2. Strategy of the game.",
      answer:
        "In volleyball, effective strategy is essential for success and involves strong communication and teamwork. Teams focus on diverse offensive plays, utilizing various attackers like outside hitters and middle blockers to keep the opposing defense off balance. Defensively, formations are adjusted based on the opponent's strengths, emphasizing solid blocking and back-row defense. Serving strategies also matter; aggressive serves can disrupt the opponent’s formation. Additionally, reading the opponent’s plays and making timely substitutions help teams adapt to the match's flow. Overall, a successful strategy combines coordination, adaptability, and clear communication among players.",
    },
    {
      question: "Q3. Is it a team game?",
      answer:
        "Yes, volleyball is a team game. It is played between two teams, each typically consisting of six players in indoor volleyball and two players in beach volleyball. The game emphasizes teamwork and communication, as players must work together to effectively serve, set, spike, block, and defend against the opposing team. Each player has specific roles and responsibilities, contributing to the overall strategy and success of the team. The collaborative nature of volleyball makes it a quintessential team sport, where coordination and unity are crucial for achieving victory.",
    },
    {
      question: "Q4. Rules of the game.",
      answer:
        "Volleyball has several key rules that ensure fair play. Each team consists of six players who rotate positions after winning a serve. The game begins with a serve, and the server must hit the ball over the net into the opponent's court. Teams are allowed a maximum of three touches to return the ball, typically involving a bump, set, and spike. Scoring uses a rally system, allowing points on every serve, with a set won by the first team to reach 25 points (with a two-point lead). Players must not touch the net or cross the center line, and violations result in points for the opposing team. Each team is also allowed a limited number of timeouts during a match. These rules help maintain the game's flow and ensure fairness.",
    },
    {
      question: "Q5. What are some important facts about the game?",
      answer:
        "Volleyball is a popular sport with several important facts that highlight its significance. It was invented in 1895 by William G. Morgan as a combination of basketball, baseball, tennis, and handball. The sport has grown globally, with over 800 million people playing worldwide. Volleyball became an Olympic sport in 1964, and beach volleyball was added in 1996. The game is played in various formats, including indoor, beach, and sitting volleyball, making it accessible to diverse populations, including those with disabilities. The FIVB (Fédération Internationale de Volleyball) is the sport's international governing body, organizing major competitions such as the World Championships and World Cup. Volleyball emphasizes teamwork, strategy, and skill, making it both exciting to play and watch. The sport also has a significant following at the amateur level, with numerous local leagues and recreational play around the world.",
    },
  ];

  return (
    <section className="about-section" id="Volleyball">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
            <h2 className="common-heading fw-bolder mb-4">Volleyball</h2>
            <p className="about-title">
              Volleyball is a team sport where two teams of six players each compete to score points by hitting a ball over a high net and into the opposing team's court. The game is played on a rectangular court, and teams can touch the ball up to three times before returning it. Points are scored using a rally scoring system, meaning a point is awarded on every serve, with matches typically played to the best of five sets, each set going to 25 points. Players have specific roles, such as hitter, setter, and libero, contributing to the team's strategy. Various forms of the game include indoor, beach, and sitting volleyball.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <img src={volleyball} alt="Volleyball" />
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

export default Volleyball;
