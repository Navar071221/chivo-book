import './App.css'

import Navbar from './dashboard/Navbar'
import Sidebar from './dashboard/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Categoria from './components/Categoria'
import Footer from './dashboard/Footer'
import React from 'react'


function App() {
  return (
    <Router>
      <h1 className='font-bold bg-slate-700'>prueba tailwind</h1>
      <div className='absolute w-full top-0 bottom-0 right-0 left-0 flex flex-col md:flex-row h-screen'>
          <Sidebar />
          <div className='flex flex-col flex-grow'>
              <Navbar />
              <div className='flex-grow overflow-y-auto p-4 bg-gray-100'>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/categorias" element={<Categoria />} />
                  </Routes>
              </div>
              <Footer />
          </div>  
      </div>
    </Router>
  );
}

export default App