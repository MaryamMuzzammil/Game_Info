// import teamgirl from '../../../../assets/images/teamgirl.jpg';
// import chess from '../../../../assets/images/chess.jpg';
// import volleyball from '../../../../assets/images/volleyball2.jpg';
// import athletics from '../../../../assets/images/athletics.jpg';
// import banner2 from '../../../../assets/images/banner2.jpg';
// import swimming from '../../../../assets/images/swimming.jpg';
// import judo from '../../../../assets/images/judo.jpg';
// import billiard from '../../../../assets/images/billiards.jpg';
// import tennis from '../../../../assets/images/tennis.jpg';
// import golf from '../../../../assets/images/golf.jpg';
// import cycling from '../../../../assets/images/cycling.jpg';
import '../../../../assets/css/herosection/sports.css'
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../../Firebase/config";
const Sports = () => {

  const [offers, setOffers] = useState([]);

  // Fetch offers from Firestore
  const getOffers = async () => {
    try {
      const q = query(collection(db, "offer"), orderBy("uploadedAt", "asc"));
      const res = await getDocs(q);
      const offerArray = res.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          offer_team: data.offer_team || "No Team",
          offer_content: data["offer_content "]?.trim() || data.offer_content?.trim() || "No Content",
          offer_picture: data.offer_picture || "",
        };
      });

      setOffers(offerArray);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <>
      <section className="sports-section" id="Sports">
      <div className="container text-center common-title fw-bold">
        <h2 className="common-heading fw-bolder mb-4">SPORTS & GAMES</h2>
        <p style={{margin: "0 auto"}}>Playing sports helps you stay in shape, teaches you how to organize your time, boosts friendships, and builds relationships with your peers and adults. Through athletics, you gain skills that can best be acquired on a court, track, or field.</p>
        <hr className="w-25 mx-auto"/>
      </div>
      <div className="container mt-5">
      <div className="row">
      {offers.map((offer) => (
        <div key={offer.id} className="col-12 col-lg-4 col-md-12">
          <div
            className="text-center card-box rounded-2 p-5 sportGames"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <img src={offer.offer_picture} alt={offer.offer_team} className="img-fluid" style={{ width: "200px" }} />
            <h5 className="my-3 fw-normal">{offer.offer_team}</h5>
            <p className="mb-5">{offer.offer_content}</p>
            <div className="d-flex justify-content-center align-items-center">
              <a href={`./sports/index.html#${offer.offer_team.replace(/\s+/g, "")}`} className="icon-span rounded-2 bg-warning w-50">
                Read more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
  
       
     </section>    </>
  );
};

export default Sports;
