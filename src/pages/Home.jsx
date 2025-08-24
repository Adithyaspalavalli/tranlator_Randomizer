import "./home.css";

export default function home() {
  return (
    <section className="home-section">
      <h1>Welcome to Frontend project here you can find a Tranalator and a Randamizer 👋</h1>
      
      <p>
        This is a hands-on React project designed to help developers 
        learn modern React features, API integration, and client-side routing. 
        It includes two interactive modules:
      </p>

      <ul>
        <li>
          <b>Translator:</b> Translate English text into multiple languages using <code>RapidAPI</code>. 
          Perfect for learning how to integrate third-party APIs and handle asynchronous calls in React.
        </li>
        <li>
          <b>Randomizer:</b> Generate random strings with customizable options. Learn to manage state with React hooks like 
          <code>useState</code>, <code>useEffect</code>, and <code>useCallback</code>.
        </li>
      </ul>

      <p>
        This project is an excellent practice for beginners and intermediate developers who want to build practical React applications 
        with modern best practices and interactive features.
      </p>

      <h2>Why Use This Project?</h2>
      <ul>
        <li>Hands-on experience with <b>React hooks</b> and state management.</li>
        <li>Learn how to integrate external APIs and process responses dynamically.</li>
        <li>Practice building a user-friendly UI with <b>Tailwind CSS</b>.</li>
        <li>Understand client-side routing with <b>React Router</b>.</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li>⚛️ React (with Hooks)</li>
        <li>🌐 RapidAPI (for translation services)</li>
        <li>🎨 Tailwind CSS (for responsive UI)</li>
        <li>🛠️ React Router (for navigation)</li>
      </ul>

      <p>
        🚀 Get started by visiting the <b>Translator</b> or <b>Randomizer</b> sections from the navigation bar.
      </p>
    </section>
  );
}
