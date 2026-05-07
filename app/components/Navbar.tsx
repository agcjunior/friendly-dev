import { useState } from "react";
import { NavLink } from "react-router";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const base = "transition hover:text-blue-400";
  const active = "text-blue-400 font-se";
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center  text-blue-400">
            <FaLaptopCode className="text-2xl mr-2" />
            <span className="text-xl font-bold">The Friendly Dev</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? active : base)}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? active : base)}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? active : base)}>
              Contact
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? active : base)}>
              Projects
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? active : base)}>
              Blog
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              className="text-blue-400 text-xl cursor-pointer"
              title="Menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4">
          <div className="flex gap-6">
            <NavLink to="/" className={({ isActive }) => (isActive ? active : base)}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? active : base)}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? active : base)}>
              Contact
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? active : base)}>
              Projects
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? active : base)}>
              Blog
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
