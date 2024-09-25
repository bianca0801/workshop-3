import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-violet-500 shadow-md w-full fixed top-0 left-0"> {/* Adăugăm `fixed`, `top-0` și `left-0` */}
      <div className="flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="text-3xl font-bold text-violet-900">Logo</div>

        {/* Links de navigare */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-yellow-400 hover:text-white">Home</a>
          <a href="#" className="text-yellow-400 hover:text-white">About</a>
          <a href="#" className="text-yellow-400 hover:text-white">Services</a>
          <a href="#" className="text-yellow-400 hover:text-white">Contact</a>
        </div>

        {/* Buton de meniu pentru mobil */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Meniul mobil */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Home</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">About</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Services</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

