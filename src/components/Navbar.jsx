import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav className=" shadow p-4 flex justify-between bg-white">
      <h1 className="text-xl font-bold text-purple-700">GuarantiX</h1>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline text-purple-700">Home</Link>
        <Link to="/dashboard" className="hover:underline text-purple-700">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
