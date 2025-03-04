import React, { useState } from "react";
import cycling from '../../../assets/images/cycling.jpg';
const Motorcycling = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "Q1. How many players play the game?",
      answer:
        "Motorcycling is typically not a game in the traditional sense, as it involves individual riders rather than teams. Millions of people worldwide ride motorcycles for various purposes, including commuting, recreation, and sport. In competitive settings, such as racing events, the number of participants can vary widely depending on the event. For example, professional races might feature anywhere from a handful to over a hundred riders competing in different categories and classes.",
    },
    {
      question: "Q2. Strategy of the game.",
      answer: (
        <>
          <p>In motorcycling, particularly in competitive racing, strategy is essential:</p>
          <ul>
            <li><strong>Race Pace Management:</strong> Balance speed with endurance to complete the race efficiently.</li>
            <li><strong>Cornering Techniques:</strong> Learn when to brake, lean, and accelerate to maintain optimal speed.</li>
            <li><strong>Tire Management:</strong> Adjust riding style to preserve tire grip and performance.</li>
            <li><strong>Fuel Strategy:</strong> In longer races, riders must manage fuel consumption effectively.</li>
            <li><strong>Drafting:</strong> Reduce wind resistance by following closely behind another competitor.</li>
            <li><strong>Weather Adaptation:</strong> Adjust to different road and weather conditions for better control.</li>
            <li><strong>Mental Focus:</strong> Maintain concentration to avoid mistakes and optimize race strategy.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Q3. Is it a team game?",
      answer:
        "Motorcycling is primarily an individual sport, where riders compete solo against others. However, there are team aspects in certain contexts, particularly in professional racing events where teams include mechanics, engineers, and strategists. Some endurance races also involve team participation where multiple riders share a single bike.",
    },
    {
      question: "Q4. Rules of the game.",
      answer: (
        <>
          <p>The rules of competitive motorcycling ensure safety and fairness:</p>
          <ul>
            <li><strong>Licensing:</strong> Riders need valid motorcycle and racing licenses.</li>
            <li><strong>Safety Gear:</strong> Helmets, gloves, racing suits, and boots are mandatory.</li>
            <li><strong>Technical Regulations:</strong> Motorcycles must meet engine size, weight, and safety specifications.</li>
            <li><strong>Track Limits:</strong> Riders must stay within designated track boundaries.</li>
            <li><strong>Flag Signals:</strong> Yellow flags indicate caution, while red flags signal race stoppages.</li>
            <li><strong>Pit Stop Rules:</strong> Teams must follow speed limits and procedures for repairs or refueling.</li>
            <li><strong>Penalties:</strong> Reckless riding or rule violations can result in time penalties or disqualification.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Q5. What are some important facts about the game?",
      answer: (
        <>
          <p>Here are some key facts about motorcycling:</p>
          <ul>
            <li><strong>Historical Origin:</strong> The first motorcycle was built by Gottlieb Daimler in 1885.</li>
            <li><strong>Motorcycle Types:</strong> Includes cruisers, sportbikes, touring bikes, and dirt bikes.</li>
            <li><strong>Safety Importance:</strong> Helmets and protective gear significantly reduce injury risks.</li>
            <li><strong>Competitive Events:</strong> MotoGP, Superbike racing, and motocross attract global audiences.</li>
            <li><strong>Economic Impact:</strong> The industry generates billions through manufacturing, sales, and tourism.</li>
            <li><strong>Electric Motorcycles:</strong> Rising in popularity as a sustainable alternative.</li>
            <li><strong>Training & Licensing:</strong> Many countries require mandatory training before obtaining a license.</li>
          </ul>
        </>
      ),
    }
  ];

  return (
    <section className="about-section" id="motorcycling">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start">
            <h2 className="common-heading fw-bolder mb-4">Motorcycling</h2>
            <p className="about-title">
            Motorcycling is the act of riding a motorcycle, a two-wheeled motor vehicle that serves various purposes, from commuting and leisure riding to competitive sports like motocross and road racing. There are several types of motorcycles, including cruisers, known for their relaxed riding position; sportbikes, designed for speed and agility; touring bikes, built for long-distance travel with added comfort; and dirt bikes, which are lightweight and suitable for off-road use. Safety is a crucial aspect of motorcycling, with riders typically donning helmets, gloves, jackets, and protective gear to minimize the risk of injury.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <img src={cycling} alt="Motorcycling" />
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

export default Motorcycling;
