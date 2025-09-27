import { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import "../assets/styles/06-gallery.scss";

import galleryImage1 from "../assets/images/06-gallery/1-optimized.webp";
import galleryImage2 from "../assets/images/06-gallery/2-optimized.webp";
import galleryImage3 from "../assets/images/06-gallery/3-optimized.webp";
import galleryImage4 from "../assets/images/06-gallery/4-optimized.webp";
import galleryImage5 from "../assets/images/06-gallery/5-optimized.webp";
import galleryImage6 from "../assets/images/06-gallery/6-optimized.webp";
import galleryImage7 from "../assets/images/06-gallery/7-optimized.webp";
import galleryImage8 from "../assets/images/06-gallery/8-optimized.webp";

function SectionGallery() {
  const [galleryID] = useState("my-test-gallery");
  const memoriesTextRef = useScrollAnimation();
  const memoriesLineRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();
  const image0Ref = useScrollAnimation();
  const image1Ref = useScrollAnimation();
  const image2Ref = useScrollAnimation();
  const image3Ref = useScrollAnimation();
  const image4Ref = useScrollAnimation();
  const image5Ref = useScrollAnimation();
  const image6Ref = useScrollAnimation();
  const image7Ref = useScrollAnimation();

  const images = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage6,
    galleryImage7,
    galleryImage4,
    galleryImage5,
    galleryImage8,
  ];

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryID]);

  return (
    <div className="section section-gallery">
      <div className="flex-container our-memories-heading">
        <h1 ref={memoriesTextRef} className="our-memories-text monsieur-la-doulaise-regular fade-in-left">
          Our memories
        </h1>
        <div ref={memoriesLineRef} className="our-memories-line fade-in-right"></div>
      </div>
      <div ref={descriptionRef} className="flex-container fade-in-up">
        <h5 className="our-memories-description eb-garamond-regular">
          Within these pages lives the poetry of our day—moments of love, joy,
          and tender beginnings. Surrounded by family and friends, we spoke
          promises eternal and stepped into forever, hand in hand, hearts
          entwined.
        </h5>
      </div>

      {/* ✅ Gallery Grid */}
      <div className="flex-container gallery-container">
        <div className="pswp-gallery" id={galleryID}>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <a
                href={image}
                key={galleryID + "-" + index}
                className={`gallery-item item-${index + 1} ${
                  index === 0 ? 'flip-in-y' :
                  [1,3,5].includes(index) ? 'fade-in-right' :
                  [2,4,6].includes(index) ? 'fade-in-left' :
                  index === 7 ? 'fade-in-top' : ''
                }`}
                ref={
                  index === 0 ? image0Ref :
                  index === 1 ? image1Ref :
                  index === 2 ? image2Ref :
                  index === 3 ? image3Ref :
                  index === 4 ? image4Ref :
                  index === 5 ? image5Ref :
                  index === 6 ? image6Ref :
                  index === 7 ? image7Ref : null
                }
              >
                <img src={image} alt="" className="gallery-thumb" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionGallery;
