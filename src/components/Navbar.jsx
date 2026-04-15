import { NavLink } from "react-router-dom";
import { FaHome, FaChartBar, FaClock } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 bg-white shadow-md gap-3 md:gap-0">

      {/* Logo */}
      <img src={logo} alt="logo" className="h-10 w-auto" />

      {/* Menu */}
      <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4 w-full md:w-auto">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 bg-green-900 text-white px-3 py-2 rounded-lg"
              : "flex items-center gap-2 text-gray-700 hover:text-green-600 px-3 py-2"
          }
        >
          <FaHome />
          Home
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 bg-green-900 text-white px-3 py-2 rounded-lg"
              : "flex items-center gap-2 text-gray-700 hover:text-green-600 px-3 py-2"
          }
        >
          <FaClock />
          Timeline
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 bg-green-900 text-white px-3 py-2 rounded-lg"
              : "flex items-center gap-2 text-gray-700 hover:text-green-600 px-3 py-2"
          }
        >
          <FaChartBar />
          Stats
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;