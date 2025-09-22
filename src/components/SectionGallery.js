import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "../assets/styles/06-gallery.scss";

function SectionGallery() {
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
      <div className="flex-container gallery-container">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a href="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80">
            <img
              alt="img1"
              src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            />
          </a>
          <a href="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80">
            <img
              alt="img2"
              src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            />
          </a>
          ...
        </LightGallery>
      </div>
    </div>
  );
}

export default SectionGallery;
