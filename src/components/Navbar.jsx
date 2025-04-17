
import React from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#c49a6c] shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 w-auto mr-3" />
        <h1 className="text-white text-xl font-bold">AhorraComprando</h1>
      </div>
      <div className="space-x-6 text-white font-semibold">
        <a href="#" className="hover:text-gray-200">Inicio</a>
        <a href="#" className="hover:text-gray-200">Productos</a>
        <a href="#" className="hover:text-gray-200">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
