import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="w-full py-4 border-b border-gray-100 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 ml-19">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">
                Best<span className="text-blue-500">kit</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li>
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="text-gray-800 hover:text-blue-500 transition-colors font-bold">
                  About
                </a>
              </li>
              <li>
              <a href="#servicee" className="text-gray-800 hover:text-blue-500 transition-colors font-bold">

                  Services
             </a>
              </li>
              <li>
                <a href="#PORTFOLIO" className="text-gray-800 hover:text-blue-500 transition-colors font-bold">
                  Projects
                </a>
              </li>
              <li>
                <a href="#BlogSection" className="text-gray-800 hover:text-blue-500 transition-colors font-bold">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Email */}
          <div className="hidden md:flex items-center gap-2 text-gray-700">
            <Mail className="h-4 w-4 text-blue-500" />
            <a href="mailto:hi@bestkit.design" className="hover:text-blue-500 transition-colors">
              hi@bestkit.design
            </a>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button className="md:hidden p-2" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
