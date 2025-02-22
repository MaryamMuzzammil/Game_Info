import React, { useState } from "react";
import '../../../assets/css/sports/sports.css';
import golf from '../../../assets/images/golf.jpg'
const Golf = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Q1. How many players play the game?",
      answer:
        "Golf can be played individually or in groups, with a typical format involving two to four players per group. In individual play, each golfer competes against others to achieve the lowest score. In team formats, such as foursomes or four-ball, teams consist of two players each. While there’s no strict limit to the number of players on a course at any given time, most courses allow groups of up to four players to ensure a smooth pace of play. Overall, golf is versatile in its format, accommodating players of various skill levels and group sizes.",
    },
    {
      question: "Q2. Strategy of the game.",
      answer:
        "The strategy in golf involves a blend of skill, course management, and mental focus. Understanding the course layout is crucial; players must evaluate each hole’s distance, hazards, and green layout to make informed decisions about club selection and shot aggressiveness. Choosing the right shot for each situation is vital, including when to play it safe to avoid hazards versus taking risks to reach the green in fewer strokes. Knowing the distances each club can cover and how conditions like wind and terrain affect ball flight is essential for effective play. A strong short game, including putting and chipping, is critical for saving strokes around the greens. Additionally, golf is as much a mental game as a physical one, requiring players to maintain concentration, manage stress, and visualize successful shots. Being adaptable and adjusting strategies based on changing course conditions and personal performance can further enhance a player's success. By integrating these strategic elements, golfers can improve their game and increase their chances of achieving lower scores.",
    },
    {
      question: "Q3. Is it a team game?",
      answer:
        "Golf is primarily an individual sport, but it can also be played in team formats. In individual play, each golfer competes against others to achieve the lowest score. However, there are team competitions, such as foursomes and four-ball formats, where teams of two players compete against each other. In these team formats, players can combine their skills and strategies to improve their overall performance. While the emphasis in golf is often on individual achievement, the team aspect adds a social dimension and allows for collaboration, making it versatile in how it can be enjoyed. Overall, while not a traditional team game, golf can be played in a way that fosters teamwork and camaraderie.",
    },
    {
      question: "Q4. Rules of the game.",
      answer:
        "The rules of golf are governed by standardized guidelines established by organizations like the United States Golf Association (USGA) and The R&A. The primary objective is to complete each hole in the fewest strokes possible, with most courses consisting of 18 holes. Players begin by teeing off from the designated tee area, and the player with the lowest score on the previous hole typically goes first. Each stroke is counted, and players must play the ball as it lies, with certain allowances for relief in specific situations, such as from hazards. Players are limited to carrying a maximum of 14 clubs in their bags, and each club must be used according to the rules. When on the green, players should avoid disturbing the area around the hole and are expected to repair any damage caused during their play. Various infractions, such as hitting out of bounds or into a water hazard, result in penalty strokes that affect a player’s score. Golf also emphasizes etiquette, requiring respect for fellow players and the course, which includes maintaining silence during swings and allowing faster groups to play through. The game can be played in match play, where players compete hole by hole, or stroke play, where the total number of strokes for the round is counted. These rules establish a framework for fair competition and uphold the integrity of the game, which is deeply rooted in tradition and respect.",
    },
    {
      question: "Q5. What are some important facts about the game?",
      answer:
        "Golf is a sport rich in history and tradition, with several important facts that highlight its significance. It originated in 15th-century Scotland and has since grown into a global phenomenon, with millions of players worldwide. The first recorded rules of golf were established in 1744 in Edinburgh, Scotland, and the first golf club, the Honourable Company of Edinburgh Golfers, was founded in 1744 as well. Golf became an Olympic sport in 1900 and was reinstated in 2016, showcasing its international appeal. Major tournaments like The Masters, the U.S. Open, The Open Championship, and the PGA Championship are highly prestigious and attract top players from around the globe.\n\nThe sport is also known for its unique scoring system, where lower scores are better, and terms like 'par,' 'birdie,' and 'eagle' denote different scoring achievements. Golf promotes values such as integrity, sportsmanship, and respect for the course and fellow players. Additionally, the development of technology, such as advanced golf clubs and balls, has significantly influenced play, making the game more accessible and enjoyable. Golf’s enduring popularity is reflected in its many variations, including mini-golf and disc golf, appealing to a diverse range of players. Overall, golf is not only a competitive sport but also a recreational activity that fosters community and camaraderie.",
    },
  ];

  return (
    <section className="about-section" id="Golf">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
            <h2 className="common-heading fw-bolder mb-4">Golf</h2>
            <p className="about-title">
              Golf is a precision sport where players use various clubs to hit a ball into a series of holes on a course, aiming to complete each hole in as few strokes as possible. Typically played on an 18-hole course, golf involves a teeing area, fairway, rough, and green, with the ultimate goal of getting the ball into the hole on the green. The game can be played individually or in teams, and scoring is based on the number of strokes taken, with terms like "par" indicating the expected strokes for a hole. With origins in 15th-century Scotland, golf emphasizes skill, strategy, and etiquette. 
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <img src={golf} alt="Golf" />
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

export default Golf;
