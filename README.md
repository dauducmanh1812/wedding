# 💍 Thanh Hằng & Đức Mạnh Wedding Invitation

A modern, responsive wedding invitation website built with React for Thanh Hằng and Đức Mạnh. Featuring smooth scroll animations, background audio, RSVP form, and optimized assets. Designed for mobile-first with fast loading times.

## 🌟 Features

-   **Single-Page Layout:** Elegant scrolling experience with fade-in animations.
-   **Data-Driven Content:** All content loaded from `src/data.json` for easy customization.
-   **Interactive RSVPFee Form:** Guests submit wishes via Google Apps Script integration.
-   **Background Audio:** Playful audio component with toggle functionality.
-   **Real-Time Countdown:** Dynamic timer to the wedding date.
-   **Modal Management:** Thank you modals and form handlers.
-   **Mobile Optimized:** Styled forms, transparent backgrounds, and touch-friendly interactions.
-   **SEO Ready:** Meta tags for social sharing and search engines.
-   **Optimized Assets:** Images compressed, CSS variables centralized.

## 🛠️ Tech Stack

-   **Frontend:** React.js with hooks, SCSS, IntersectionObserver for animations.
-   **Styling:** Responsive SCSS with CSS custom properties.
-   **Audio:** Custom AudioPlayer component.
-   **Form Submission:** Integration with Google Apps Script for serverless handling.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)

### Installation

1. Clone or set up the project:
   ```bash
   git clone https://github.com/dauducmanh1812/wedding.git
   cd wedding
   npm install
   ```

2. Run the app:
   ```bash
   npm start
   ```
   Visit `http://localhost:3000`.

## 🎨 Customization

### Content
Edit `src/data.json` for text, dates, and settings.

### Images
Add images to `src/assets/images/` (folders like 01-hero, 06-gallery).
Use optimized WebP in `src/assets/images/optimized/`.

### Audio
Place audio in `src/assets/audio/`.

### Colors & Themes
Modify CSS variables in `src/App.scss` `:root`.

### Animations
Use `useScrollAnimation` hook for scroll-triggered fade-ins. The hook uses IntersectionObserver API to trigger animations when elements come into view.

#### How to Use
1. Import the hook in your component:
   ```javascript
   import { useScrollAnimation } from '../hooks/useScrollAnimation';
   ```

2. Call the hook to get a ref (optional: pass custom className, defaults to 'fade-in-up'):
   ```javascript
   const animationRef = useScrollAnimation();
   ```

3. Apply the ref and className to the element you want to animate:
   ```javascript
   <div ref={animationRef} className="fade-in-up">
     Content to animate
   </div>
   ```

#### Example: Using in SectionHero
```javascript
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function SectionHero({ siteData }) {
  const animationRef = useScrollAnimation();

  return (
    <div ref={animationRef} className="fade-in-up section section-hero">
      <div className="arcittya-begatri">
        <h1 className="fist-name">
          {siteData.couple.shortName_bride.toUpperCase()}
        </h1>
        <div className="second">
          <span>&</span>{" "}
          <h1 className="second-name">
            {siteData.couple.shortName_groom.toUpperCase()}
          </h1>
        </div>
      </div>
    </div>
  );
}
```

The element will be invisible initially (opacity: 0, translated down 20px). When it scrolls into view, the `show` class is added, triggering a smooth fade-in and slide-up animation (0.5s ease-out).

## 📝 RSVP Form

Form submits to Google Apps Script for wish collection.

## 📜 Scripts

- `npm start`: Development server.
- `npm run build`: Production build.

---

For issues, customize via JSON and SCSS.

---
