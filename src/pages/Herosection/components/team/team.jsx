import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../../Firebase/config"; // Import Firebase configuration
import "../../../../assets/css/herosection/team.css";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // Default active index

  // Function to fetch team members from Firebase
  const getTeamMembers = async () => {
    try {
      const q = query(collection(db, "our_Team"), orderBy("uploadedAt", "asc"));
      const res = await getDocs(q);
      const membersArray = res.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.teamMember_name || "Unknown",
          image: data.teamMember_picture || "",
          description: data.teamMember_about || "No Information",
        };
      });

      setTeamMembers(membersArray);
    } catch (error) {
      console.error("Error fetching team members:", error);
    }
  };

  useEffect(() => {
    getTeamMembers();
  }, []);

  return (
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

      {/* Dynamic Team List */}
      <div id="Services">
        <ul className="services">
          {teamMembers.map((member, index) => (
            <li
              key={member.id}
              role="button"
              className={index === activeIndex ? "active" : ""}
              style={{ backgroundImage: `url(${member.image})` }}
              onClick={() => setActiveIndex(index)}
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
  );
};

export default Team;
