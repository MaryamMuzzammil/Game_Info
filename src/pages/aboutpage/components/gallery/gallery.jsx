import React, { useState } from "react";
import g11 from "../../../../assets/images/g11.jpg";
import billiards from "../../../../assets/images/billiards.jpg";
import athletics from "../../../../assets/images/athletics.jpg";
import p2 from "../../../../assets/images/p2.jpg";
import g12 from "../../../../assets/images/g12.jpg";
import p1 from "../../../../assets/images/p1.jpg";
import g4 from "../../../../assets/images/g4.jpg";
import judo from "../../../../assets/images/judo.jpg";
import g10 from "../../../../assets/images/g10.jpg";
import g2 from "../../../../assets/images/g2.jpg";
import p4 from "../../../../assets/images/p4.jpg";
import p5 from "../../../../assets/images/p5.jpg";
import p6 from "../../../../assets/images/p6.png";
import about from "../../../../assets/images/about.jpg";
import golf from "../../../../assets/images/golf.jpg";
import volleyball from "../../../../assets/images/volleyball.jpg";
import g3 from "../../../../assets/images/g3.jpg";
import p3 from "../../../../assets/images/p3.jpg";
import banner1 from "../../../../assets/images/banner1.jpg";
import banner2 from "../../../../assets/images/banner2.jpg";
import "../../../../assets/css/About/gallery.css";

const images = [
  g11, billiards, athletics, p2, g12, p1, g4, judo, g10, g2, p4, 
  p5, p6, about, golf, volleyball, g3, p3, banner1, banner2
];

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    document.body.style.overflowY = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflowY = "scroll"; // Restore scrolling
  };

  return (
    <>
      <section>
        <div id="gallery">
          <h1
            className="heading"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            "GAME INFO GAMING" GALLERY
          </h1>

          <div className="gallery-wrapper">
            {images.map((imgSrc, index) => (
              <div key={index} className="gallery-container">
                <div className="gallery-item">
                  <div className="image" onClick={() => openLightbox(imgSrc)}>
                    <img src={imgSrc} alt="Gallery pic" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {lightboxImage && (
          <div id="lightbox" className="active" onClick={closeLightbox}>
            <img src={lightboxImage} alt="Enlarged view" />
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
