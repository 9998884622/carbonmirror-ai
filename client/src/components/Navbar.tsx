import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="flex items-center gap-2">
          <Leaf />
          <span className="font-bold text-xl">
            CarbonMirror AI
          </span>
        </div>

        <div className="flex gap-6">

          <Link to="/">
            Home
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/calculator">
            Calculator
          </Link>

          <Link to="/login">
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
