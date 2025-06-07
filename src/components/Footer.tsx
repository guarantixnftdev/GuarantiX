import { Shield } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 md:py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-[#513490]" />
          <span className="text-lg font-semibold">GuarantiX</span>
        </div>
        <p className="text-center text-sm text-gray-500 md:text-left">
          &copy; {new Date().getFullYear()} GuarantiX. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            to="/privacy"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Terms
          </Link>
          <Link
            to="/contact"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
