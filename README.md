# Translator & Randomizer Web App

**A beginner-level React & Tailwind project  (August 2025)**.

- 🆕 **Translator**: Convert English text into several languages using RapidAPI (manual button-triggered to avoid rate limit errors).
- 🔠 **Randomizer**: Generate random strings with customizable options (lower/upper/digits/symbols), powered by React Hooks (`useState`, `useEffect`, `useCallback`).
- 🧭 **Client-Side Routing**: Navigate smoothly between pages—Home, Translator, and Randomizer—using `react-router-dom`.

---

##  Table of Contents

1. [Demo](#demo)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Usage](#usage)
6. [Deployment](#deployment)
7. [Screenshots](#screenshots)
8. [Author](#author)
9. [License](#license)


---

##  Demo

*(Add your deployed app link here once available—e.g., on Vercel or Netlify)*

---

##  Tech Stack

| Layer     | Technologies                                  |
|-----------|-----------------------------------------------|
| Framework | React (via Vite)                              |
| Styling   | Tailwind CSS                                  |
| Routing   | React Router (`react-router-dom`)              |
| API       | RapidAPI for translation service                |
| Tools     | Vite, Node.js/NPM                              |

---


- **Navbar.jsx**: Top navigation bar with links to routes.
- **translate.js**: API helper for translation logic via RapidAPI.
- **useRandomString.js**: Utility for generating random strings.
- **Translator.jsx**: Page to translate English text (manual button to avoid 429).
- **Randomizer.jsx**: Page to generate strings using React Hooks pattern.

---

##  Getting Started

### Prerequisites

- Node.js & npm installed on your machine.

### Steps

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Adithyaspalavalli/tranlator_-_Randomizer.git
   cd tranlator_-_Randomizer

2. **Install dependencies**
    ```bash
    npm install

3. **Setup environment variables**
   **Create a .env at the project root:**

   VITE_TRANSLATE_URL=YOUR_RAPISAPI_URL
   VITE_TRANSLATE_KEY=YOUR_RAPIDAPI_KEY_HERE
   VITE_TRANSLATE_HOST=

4. **Run the development server**
    ```bash
    npm run dev

Visit http://localhost:5173 to explore the app.

Screenshots

(Add screenshots below once you have them—for example:)

Home Page
![Home Page Screenshot](screenshots/home.png)

Translator Page
![Translator Screenshot](screenshots/translator.png)

Randomizer Page
![Randomizer Screenshot](screenshots/randomizer.png)

## Author

# Adithya

GitHub: Adithyaspalavalli
Email: your-email@example.com

