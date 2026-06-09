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
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/calculator">Calculator</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
