import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navLinks from "../constants/data";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-green-500 fixed w-full shadow-lg z-50">
      <div className="flex justify-between items-center px-6">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 py-4">
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-10 rounded-full border-2 border-white"
          />
          <h1 className="text-2xl font-bold">Manish Kumar Ray</h1>
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>

        {/* Menu */}
        <ul
          className={`absolute md:static bg-black left-0 w-full md:w-auto md:flex md:space-x-6 font-semibold 
          ${open ? "top-16 block text-center py-4" : "hidden md:flex"}`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="py-2 md:py-0 hover:text-yellow-300 transition">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;