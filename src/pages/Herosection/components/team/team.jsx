import React, { useState } from "react";
import '../../../../assets/css/herosection/team.css';
import mahi from "../../../../assets/images/mem5.jpg";
import neha from "../../../../assets/images/mem3.jpg";
import kainat from "../../../../assets/images/mem1.jpg";
import maryam from "../../../../assets/images/mem4.jpg";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default active index (Kainat)

  const teamMembers = [
    {
      name: "Mah-e-Zehra",
      image: mahi,
      description:
        "With a passion for the beautiful game and a wealth of experience,Mahi brings 8 years of coaching and playing experience to our team. A former player at Gaming club,Mahi has a deep understanding of the game and is dedicated to developing the next generation of football talent. In the classroom and on the field,Mahi emphasizes teamwork, discipline, and sportsmanship. Their coaching philosophy centers around building not just skilled athletes, but also confident individuals who understand the importance of collaboration and hard work. Under Mahi’s guidance, our team is committed to excellence, constantly striving to improve and achieve our goals. Join us in welcoming Mahi —a true leader and mentor in the world of football!",
    },
    {
      name: "Nehaa Fatima",
      image: neha,
      description:
        "With a passion for basketball and years of experience, Nehaa is dedicated to shaping our athletes both on and off the court. Having played at Gaming club, Nehaa brings a wealth of knowledge and a competitive spirit to our program. Nehaa's philosophy centers on teamwork, discipline, and continuous improvement. They focus on developing players’ skills, fostering strategic thinking, and encouraging a strong sense of camaraderie among the team. Under Nehaa’s leadership, our athletes are not only trained in the fundamentals of the game but also instilled with the values of hard work and sportsmanship. Join us in welcoming Nehaa —a committed mentor who inspires excellence and growth in every player!",
    },
    {
      name: "Kainat Zehra",
      image: kainat,
      description:
        "With a passion for golf and a dedication to helping players excel, Kainat Zehra brings 6 years of experience both as a player and a coach. Having played at Gaming club, Kainat Zehra possesses an extensive understanding of the game and its intricacies.Kainat believes that golf is not just about technique, but also about developing mental resilience and strategic thinking. Their coaching approach focuses on personalized instruction, helping each golfer refine their skills while fostering a love for the game. Under Kainat’s guidance, our players not only improve their swings and putting but also learn the values of sportsmanship, patience, and perseverance. Join us in welcoming Coach Kainat —a passionate mentor dedicated to unlocking each player’s full potential on the course!",
    },
    {
      name: "Maryam Muzzammil",
      image: maryam,
      description:
      "As our Social Media Manager, Maryam is the creative force behind our online presence. With a background in computer science, they excel at crafting engaging content that captures the spirit of our team and connects with our community. Maryam is passionate about storytelling and uses social media platforms to highlight our athletes, share exciting updates, and promote our events. Their keen eye for design and knack for audience engagement ensure that our message resonates across various platforms. Dedicated to building a vibrant online community,Maryam encourages interaction and fosters connections among fans, athletes, and supporters. Join us in welcoming Maryam—the voice of our team in the digital world!",
    },
  ];

  return (
    <>
      <section className="team">
        <div
          className="container text-center common-title fw-bold"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <h2 className="common-heading fw-bolder mb-4">OUR TEAM</h2>
          <p style={{ margin: "0 auto" }}>
            At "Game Info Gaming", we believe that every great achievement
            starts with a strong team. Our athletes, coaches, and support staff
            are united by a shared love for the sport and a commitment to
            excellence.
          </p>
          <hr className="w-25 mx-auto" />
        </div>
        <div id="Services">
          <ul className="services">
            {teamMembers.map((member, index) => (
              <li
                key={index}
                role="button"
                className={index === activeIndex ? "active" : ""}
                style={{ backgroundImage: `url(${member.image})` }}
                onClick={() => setActiveIndex(index)} // Set clicked member as active
              >
                <h3>{member.name}</h3>
                <div className="section-content">
                  <div className="inner">
                    <div className="bio">
                      <h2>{member.name}</h2>
                      <p>{member.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Team;
