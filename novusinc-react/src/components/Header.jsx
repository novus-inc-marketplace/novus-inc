import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container-xxl relative p-0">
      <nav className="navbar flex items-center justify-between px-4 lg:px-5 py-3 lg:py-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0 text-2xl font-bold">Novus Inc</h1>
        </Link>
        <button
          className="navbar-toggler lg:hidden"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="fa fa-bars"></span>
        </button>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav mx-auto py-0 flex flex-col lg:flex-row">
            <Link to="/" className="nav-item nav-link active p-2 lg:p-0 lg:px-3">Home</Link>
            <Link to="/about" className="nav-item nav-link p-2 lg:p-0 lg:px-3">About</Link>
            <Link to="/service" className="nav-item nav-link p-2 lg:p-0 lg:px-3">Service</Link>
            <Link to="/project" className="nav-item nav-link p-2 lg:p-0 lg:px-3">Project</Link>
            {/* Dropdown for Pages - simplified for now */}
            <div className="nav-item dropdown relative group">
              <a href="#" className="nav-link dropdown-toggle p-2 lg:p-0 lg:px-3" onClick={(e) => e.preventDefault()}>Pages</a>
              <div className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg rounded-md m-0">
                <Link to="/team" className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Team</Link>
                <Link to="/testimonial" className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100">Testimonial</Link>
                <Link to="/404" className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100">404 Page</Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link p-2 lg:p-0 lg:px-3">Contact</Link>
          </div>
          <Link to="/contact" className="btn rounded-full py-2 px-4 mt-3 lg:mt-0 lg:ml-3 hidden lg:block">Get Started</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;