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
Use `useScrollAnimation` hook for scroll-triggered fade-ins.
Apply `className="fade-in-up"` and use the hook for automatic triggers.

## 📝 RSVP Form

Form submits to Google Apps Script for wish collection.

## 📜 Scripts

- `npm start`: Development server.
- `npm run build`: Production build.

---

For issues, customize via JSON and SCSS.

---
