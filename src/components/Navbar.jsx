import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const link = ({ isActive }) =>
    `px-3 py-2 rounded-xl text-sm transition ${isActive ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`;

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <div className="font-semibold">Simple Project</div>
        <div className="flex gap-6">
          <NavLink className={link} to="/">Home</NavLink>
          <NavLink className={link} to="/translator">Translator</NavLink>
          <NavLink className={link} to="/randomizer">Randomizer</NavLink>
        </div>
      </nav>
    </header>
  );
}
