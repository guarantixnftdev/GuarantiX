import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav className=" shadow p-4 flex justify-between bg-white">
      <Link to="/" className="text-[#513490]">
        <h1 className="text-xl font-bold text-[#513490]">GuarantiX</h1>
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline text-[#513490]">
          Home
        </Link>
        <Link to="/dashboard" className="hover:underline text-[#513490]">
          Dashboard
        </Link>
        <Link to="/create" className="hover:underline text-[#513490]">
          Create
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
