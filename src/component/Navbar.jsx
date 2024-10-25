import React, { useContext, useState } from 'react';
import navItems from "../Data/navItems";
import { Link } from "react-router-dom";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "../context/CartContext"; // Import the Cart context
import logo from "../assets/AVERI (1).png";
import { IoCartSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  // Toggle the main menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle subtopics visibility for a specific item
  const toggleSubMenu = (index) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;

  return (
    <nav className="bg-white shadow-md">
      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Bluestone Logo" className="w-20 h-20 rounded-full object-cover" />
            </Link>
          </div>

          <div className="flex-1 px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Jewellery"
                className="w-full border rounded-md pl-3 pr-10 py-2"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-red-500 p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a4 4 0 11-8 0 4 4 0 018 0zM19 19l-3.5-3.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-700">
            <Link to="/term-and-condtiton" className="hover:text-blue-600">
              Term & Condition
            </Link>

            <Link to="/cart" className="relative">
            <span className='flex'>

            <IoCartSharp className='text-2xl' />
              <span className=" bg-green-100  rounded-full px-2 text-sm flex text-center items-center bottom-3 absolute left-3 opacity-90">
                {cartItems.length} {/* Shows number of items in the cart */}
              </span>
            </span>
            </Link>

            <Link to="/policy" className="hover:text-blue-600">
              policy
            </Link>
          </div>
        </div>

        <div className="bg-blue-900 text-white text-sm">
          <div className="container mx-auto px-4 py-2 flex justify-between">
            <div className="relative flex space-x-12">
              {navItems.map((item, index) => (
                <ul className="relative group z-10" key={index}>
                  <li>
                    <ul className="flex gap-1 items-center">
                      <Link to={item.path} className="hover:text-blue-500 flex items-center gap-2">
                        {item.title}
                      </Link>
                      {item.subTopics && (
                        <FaAngleDown className="flex-shrink-0" />
                      )}
                    </ul>
                    {item.subTopics && (
                      <ul
                        className={`absolute hidden group-hover:flex bg-white shadow-lg rounded-lg p-4 text-black ${
                          item.title === "WATCH JEWELLERY"
                            ? "flex-col"
                            : "flex-row"
                        }`}
                      >
                        {item.subTopics.map((subItem, subIndex) => (
                          <li key={subIndex} className="py-1 px-4 cursor-pointer">
                            <span className="hover:text-red-800 font-bold">
                              {subItem.subTitle}
                            </span>
                            {subItem.subTopics && (
                              <ul className="mt-2 pl-4">
                                {subItem.subTopics.map(
                                  (nestedItem, nestedIndex) => (
                                    <li
                                      key={nestedIndex}
                                      className="py-1 hover:text-blue-600 w-[10vw]"
                                    >
                                      {nestedItem.subTitle}
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ))}

                      </ul>
                    )}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Bluestone Logo" className="w-20 h-20 rounded-full object-cover" />
            </Link>
          </div>

          <div className="flex-1 px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Jewellery"
                className="w-[40vw] border rounded-md pl-3 pr-10 py-2"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-red-500 p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a4 4 0 11-8 0 4 4 0 018 0zM19 19l-3.5-3.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            
          <Link to="/cart" className="relative">
            <span className='flex'>

            <IoCartSharp className='text-2xl' />
              <span className=" bg-green-100  rounded-full px-2 text-sm flex text-center items-center bottom-3 absolute left-3 opacity-90">
                {cartItems.length} {/* Shows number of items in the cart */}
              </span>
            </span>
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <button onClick={toggleMenu} className="text-2xl text-gray-700 p-2">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-md z-20 transform transition-transform duration-300 ${ 
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: "55vw" }}
        >
          <div>
            <button
              onClick={toggleMenu}
              className="right-0 absolute text-2xl text-gray-700 p-2"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4 mt-5">
            
            {navItems.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <Link
                    to={item.path || "#"}
                    className="text-gray-700 hover:text-blue-500"
                    onClick={toggleMenu} // Close menu on item click
                  >
                    {item.title}
                  </Link>
                  {item.subTopics && (
                    <FaAngleDown
                      className="flex-shrink-0 cursor-pointer"
                      onClick={() => toggleSubMenu(index)}
                    />
                  )}
                </div>
                {item.subTopics && openSubMenus[index] && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.subTopics.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1 text-gray-700">
                        {subItem.subTitle}
                      </li>
                    ))}
                  </ul>
                )}

                
              </div>
              
            ))}
            
            <Link to="/term-and-condtiton" className="hover:text-blue-600">
              Term & Condition
            </Link>

            <Link to="/policy" className="hover:text-blue-600">
              policy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
