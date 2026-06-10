import { NavLink } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1 rounded-md text-sm font-medium ${isActive ? "text-green-200" : "text-white/90"}`;

  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="flex items-center gap-3">
          <Leaf className="w-6 h-6" />
          <span className="font-extrabold text-lg">
            CarbonMirror AI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>

          <NavLink to="/dashboard" className={linkClasses}>
            Dashboard
          </NavLink>

          <NavLink to="/calculator" className={linkClasses}>
            Calculator
          </NavLink>

          <NavLink to="/login" className={linkClasses}>
            Login
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-white/10"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 px-6 pb-4">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/dashboard" onClick={() => setOpen(false)} className={linkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/calculator" onClick={() => setOpen(false)} className={linkClasses}>
            Calculator
          </NavLink>
          <NavLink to="/login" onClick={() => setOpen(false)} className={linkClasses}>
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
