import React, { useState } from 'react'
import { FaBars, FaHome, FaEtsy, FaBraille, FaCheckDouble, FaCog } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
import { Link } from 'react-router-dom/dist';

const Sidebar = () => {
    const [isOpen, setIsOpen ] = useState(false);
  return (
    <div>
      {/* button para tamaños pequeñas->moviles */}
       <button 
            className='md:hidden p-4 text-white bg-gray-800'
            onClick={() => setIsOpen(!isOpen)}          
       >
        <FaBars />
        </button> 
        <div className={`h-full md:w-64 bg-gray-800 text-white p-4 fixed 
            md:relative transition-transform transform ${isOpen ?  
            "translate-x-0" : "-translate-x-full"} md:translate-x-0` }>
                <h1 className='text-2xl font-bold mb-6'>Cursos-App</h1>
            <ul>
                <li className='mb-4 flex items-center'>
                    <FaHome className='mr-3' />
                    <Link to="/" className="hover:text-gray-200">Inicio</Link>
                </li>
                <li className='mb-4 flex items-center'>
                    <FaEtsy className='mr-3' />
                    <Link to="/categorias" className="hover:text-gray-200">Categoria</Link>
                </li>
            </ul>    
        </div>
    </div>
  )
}

export default Sidebar