import { useEffect, useState } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import "../assets/styles/06-gallery.scss";

function SectionGallery() {
  const [galleryID] = useState("my-test-gallery");

  const images = [
    {
      largeURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
    },
    {
      largeURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
    },
    {
      largeURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
    },
    {
      largeURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg",
    },
    {
      largeURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg",
    },
    {
      largeURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg",
    },
    {
      largeURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg",
    },
    {
      largeURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg",
    },
    {
      largeURL:
        "https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg",
    },
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
        <h3 className="our-memories-description">
          This album captures the most beautiful moments of our special
          day—filled with love, joy, and unforgettable memories. From our
          heartfelt vows to the first dance, every photo tells a story of our
          journey together. Surrounded by family and friends, we celebrated a
          love that will last a lifetime.
        </h3>
      </div>

      {/* ✅ Gallery Grid */}
      <div className="flex-container gallery-container">
        <div className="pswp-gallery" id={galleryID}>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <a href={image.largeURL} key={galleryID + "-" + index}>
                <img src={image.largeURL} alt="" className="gallery-thumb" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionGallery;
