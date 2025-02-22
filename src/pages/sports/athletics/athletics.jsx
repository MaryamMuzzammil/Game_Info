import React, { useState } from "react";
import '../../../assets/css/sports/sports.css';
import athletics from '../../../assets/images/athletics.jpg'
const Athletics = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Q1. How many players play the game?",
      answer:
        "Athletics generally involves individual participation, meaning that most events are contested by single athletes. However, some events, such as relay races, involve teams. For example, in a 4x100 meter relay, four athletes make up one team, with each running a segment of the race. Overall, while athletics primarily focuses on individual performances across various disciplines, team formats exist in specific events. The structure allows for a wide range of participants, from individual competitors to relay teams.",
    },
    {
      question: "Q2. Strategy of the game.",
      answer:
        "The strategy in athletics varies significantly across different events but generally involves careful planning and execution tailored to an athlete’s strengths and the specific demands of their discipline. For runners, pacing is crucial; sprinters must optimize their speed while conserving energy for the final push, while distance runners need to manage their stamina throughout the race. Athletes often study their competitors to anticipate tactics, especially in races with multiple laps, where positioning and timing can make a difference. In field events like jumps and throws, technique plays a central role. Athletes must focus on their form, takeoff angles, and optimal use of strength to achieve maximum distance or height. For example, a long jumper will strategize their approach speed and takeoff point to maximize their jump. In relay races, teamwork and precise baton exchanges are vital; athletes practice handoffs extensively to ensure smooth transitions, which can significantly impact overall performance. Mental preparation is also important across all events, as visualization and concentration techniques can enhance focus and reduce anxiety. Ultimately, successful athletic performance combines physical preparation, strategic planning, and mental fortitude tailored to each specific event.",
    },
    {
      question: "Q3. Is it a team game?",
      answer:
        "Athletics is primarily an individual sport, with most events contested by single athletes competing against each other. However, there are team components, particularly in relay races, where teams of runners collaborate to complete a race by passing a baton. For example, the 4x100 meter relay involves four athletes, each running a segment of the race. In some competitions, teams are formed to accumulate points based on individual performances across various events, such as in track and field meets. While the core of athletics focuses on individual achievement, the team aspects in relays and multi-event competitions add a collaborative dimension to the sport. Overall, athletics can be seen as both an individual and a team sport, depending on the specific event and competition format.",
    },
    {
      question: "Q4. Rules of the game.",
      answer:
        " The rules of athletics vary by event but generally follow a structured framework to ensure fair competition. For running events, athletes must stay within their designated lanes during sprints and may not impede other competitors. In distance races, competitors must adhere to a specified course, and false starts can result in disqualification. In relay races, athletes must complete a baton exchange within a designated zone, and any failure to do so can lead to disqualification. Field events, such as jumps and throws, have specific rules regarding takeoff areas, landing zones, and measurement procedures. For instance, in the long jump, athletes must take off from a designated board without stepping beyond it. Fouls can occur in various events, such as stepping outside the lane in sprints, failing to clear the bar in high jump, or throwing beyond the foul line in shot put and discus. Additionally, all athletes must follow uniform regulations, including proper attire. Understanding and adhering to these rules is essential for fair play and the integrity of competitions in athletics.",
    },
    {
      question: "Q5. What are some important facts about the game?",
      answer:
        "Athletics is a multifaceted sport with numerous important facts that highlight its significance and history. Originating from ancient competitions, athletics has been a part of the Olympic Games since their inception in 776 BC. The modern Olympic Games, reintroduced in 1896, prominently feature track and field events, showcasing the world's best athletes. Athletics encompasses a wide range of events, including sprints, distance races, hurdles, jumps, and throws, appealing to a variety of skills and abilities.The sport emphasizes personal achievement, with athletes often setting individual goals and records. Notable athletes, such as Usain Bolt, who holds the world record for the 100 meters at 9.58 seconds, and Haile Gebrselassie, a long-distance running legend, have become icons in the sport. Athletics promotes physical fitness, discipline, and teamwork, particularly in relay events. Major competitions, including the World Athletics Championships and the Diamond League, attract global attention, furthering the sport's popularity. Additionally, athletics serves as a foundational discipline in physical education and youth sports programs, promoting health and wellness from an early age. Overall, athletics is a dynamic sport with a rich history, cultural significance, and widespread participation.",
    },
  ];

  return (
    <section className="about-section" id="athletics">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
            <h2 className="common-heading fw-bolder mb-4">Athletics</h2>
            <p className="about-title">
            Athletics, often referred to as track and field, encompasses a variety of competitive sports that involve running, jumping, throwing, and walking. Key events include sprints, middle and long-distance races, hurdles, relays, long jump, high jump, pole vault, shot put, discus, javelin, and hammer throw. Governed by the International Association of Athletics Federations (IAAF), athletics emphasizes speed, strength, endurance, and technique. With ancient origins in the Olympic Games of Greece, it remains a popular sport worldwide, appealing to athletes of all ages and abilities. Athletics promotes physical fitness, teamwork, and personal achievement, making it a vital part of global sports culture.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <img src={athletics} alt="chess" />
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

export default Athletics;
