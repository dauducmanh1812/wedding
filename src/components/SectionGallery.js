import { useEffect, useState } from "react";

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
        <h1 className="our-memories-text monsieur-la-doulaise-regular">
          Our memories
        </h1>
        <div className="our-memories-line"></div>
      </div>
      <div className="flex-container">
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
                className={`gallery-item item-${index + 1}`}
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
