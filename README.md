# 💍 Minimalist Wedding Invitation Website

A beautiful, single-page wedding invitation website built with React. This project is designed to be extremely easy to customize, with all content, text, and settings managed through a simple JSON file. It features a minimal Node.js/Express backend to handle guest wishes submitted via an RSVP form.

## 🌟 Features

-   **Single-Page Layout:** A smooth, modern, single-page scrolling experience.
-   **Data-Driven Content:** All text (names, dates, locations, timeline) is loaded from `src/data.json`, making customization fast and code-free.
-   **Interactive RSVP Form:** Guests can send their wishes and confirm attendance. Submissions are saved to a `wishes.json` file on the server.
-   **Dynamic Modals:**
    -   A "Thank You" pop-up appears after a guest submits the RSVP form.
    -   A "Gifting" pop-up with QR codes appears when the "Mừng Cưới" button is clicked.
-   **Live Countdown:** A real-time countdown timer builds anticipation for the special day.
-   **Background Audio:** Includes an option for background music to enhance the ambiance.
-   **Minimal Backend:** A lightweight Express.js server handles form submissions.
-   **Easy to Deploy:** Built with Create React App, making the build and deployment process straightforward.

## 🛠️ Tech Stack

-   **Frontend:** React.js
-   **Backend:** Node.js, Express.js
-   **Development Server:** `concurrently` (to run frontend and backend simultaneously)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (which includes npm) installed on your computer. Version 14.x or higher is recommended.

### Installation & Setup

1.  **Clone the repository (or set up the project files):**
    If you have git, you can clone it. Otherwise, just make sure all the files provided earlier are in a project folder.
    ```bash
    git clone https://your-repository-url.git
    cd your-project-folder
    ```

2.  **Install NPM packages:**
    This command will read the `package.json` file and install all the necessary dependencies for both the React app and the Express server.
    ```bash
    npm install
    ```

3.  **Run the application:**
    This single command starts both the React development server (on port 3000) and the backend Express server (on port 3001) at the same time.
    ```bash
    npm start
    ```

Your browser should automatically open to `http://localhost:3000`, where you can see the live website.

## 🎨 Customization

This project is designed to be easily customized without touching the React code.

### 1. Editing Content (Text)

All text displayed on the website can be changed in the **`src/data.json`** file. Open this file and edit the values for names, dates, family information, timeline events, etc.

```json
{
  "couple": {
    "groom": "Hồng Quân",
    "bride": "Vân Anh",
    "shortName": "Quân & Anh"
  },
  "event": {
    "date": "18.05.2025",
    "fullDate": "Chủ Nhật, 18 Tháng 5, Năm 2025",
    // ... and so on
  }
}
```

### 2. Changing Images

-   All images are located in the **`public/images/`** folder, organized by section (`hero`, `memories`, `modals`, etc.).
-   To change an image, simply replace the file in the corresponding folder with your own image. **Make sure the new image has the exact same name and extension.**
-   For the QR codes, place your generated QR image files in `public/images/modals/` and update the paths in `src/data.json` if needed.

### 3. Updating Background Music

-   Place your desired audio file (e.g., in `.mp3` format) inside the **`public/audio/`** folder.
-   Ensure its name is `background-music.mp3`, or update the file name in the `<audio>` tag within `src/App.js`.

### 4. Modifying the Countdown

-   To set the target date and time for the countdown, edit the `countdownTarget` value in **`src/data.json`**.
-   The format must be `YYYY-MM-DDTHH:mm:ss`. For example: `"2025-05-18T09:00:00"`.

## 📝 How the RSVP Form Works

1.  A guest fills out the form on the website and clicks "GỬI LỜI NHẮN".
2.  The React app sends the form data to the backend API endpoint (`/api/submit-wish`).

## 📜 Available Scripts

In the project directory, you can run:

-   `npm start`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `build` folder.
-   `npm test`: Launches the test runner in interactive watch mode.

---