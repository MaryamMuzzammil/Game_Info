import React from "react";
import Football from "./football/football";
import '../../assets/css/sports/sports.css';
import Judo from "./judo/judo";
import Tennis from "./tennis/tennis";
import Motorcycling from "./motorcycling/motorcycling";
import Volleyball from "./volleyball/volleyball";
import Golf from "./golf/golf";
import Chess from "./chess/chess";
import Athletics from "./athletics/athletics";
const SportsPage = () => {
  return (
    <>
      <section>
        <div className="container-fluid text-center">
          <div className="row align-items-center">
            <div
              className="col-md-12 text-center d-flex hero"
              data-aos="zoom-in"
              style={{
                width: "100%",
                height: "300px",
                opacity: 0.7,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className="mainhero" data-aos="fade-right">
                Sports and Games
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Football/>
      <Judo/>
      <Tennis/>
      <Motorcycling/>
      <Volleyball/>
      <Golf/>
      <Chess/>
      <Athletics/>
      
    </>
  );
};

export default SportsPage;
