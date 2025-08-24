import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import Randomizer from "./pages/Randomizer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/randomizer" element={<Randomizer />} />
        </Routes>
      </main>
    </div>
  );
}
