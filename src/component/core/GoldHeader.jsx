import React from 'react';
import { Link } from 'react-router-dom';

const GoldHeader = () => {
  return (
    <div className="p-4 ">
    {/* Breadcrumb navigation */}
    <nav className="text-sm text-gray-500 mb-4">
      <Link to="/" className="hover:underline">HOME</Link> / 
      <Link to="/jewellery" className="hover:underline">JEWELLERY</Link> / 
      <span className="text-red-500">GOLDCOINS</span>
    </nav>

    {/* Title */}
    <h1 className="text-2xl font-bold text-red-500 mb-4">GOLDCOINS</h1>

    {/* Filter section */}
    <div className="bg-blue-200 p-4 rounded-md flex flex-col md:flex-row items-center justify-between">
      <div className="flex space-x-4">
        <select className="p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none">
          <option>WEIGHT (GRAM)</option>
          {/* Add more options here */}
        </select>
        <select className="p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none">
          <option>PURITY</option>
          {/* Add more options here */}
        </select>
      </div>
    </div>

    {/* Explore other designs links */}
    <div className="mt-4 text-sm">
      <span className="font-bold">Explore other designs</span>
      <div className="flex flex-wrap mt-2 space-x-4">
        <Link to="/rings-designs-online" className="text-blue-500 hover:underline">Rings Designs Online</Link>
        <Link to="/earrings" className="text-blue-500 hover:underline">Earrings</Link>
        <Link to="/pendants" className="text-blue-500 hover:underline">Pendants</Link>
        <Link to="/bracelets" className="text-blue-500 hover:underline">Bracelets</Link>
        <Link to="/bangles" className="text-blue-500 hover:underline">Bangles</Link>
        <Link to="/chains" className="text-blue-500 hover:underline">Chains</Link>
        <Link to="/mangalsutra" className="text-blue-500 hover:underline">Mangalsutra</Link>
        <Link to="/nose-pins" className="text-blue-500 hover:underline">Nose Pins</Link>
        <Link to="/necklaces" className="text-blue-500 hover:underline">Necklaces</Link>
      </div>
    </div>
  </div>
  )
}

export default GoldHeader
