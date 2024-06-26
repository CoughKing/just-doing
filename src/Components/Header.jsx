import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-cyan-400 border-gray-800 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1718182246~exp=1718185846~hmac=3e2a3accc3b1cf78e34b840c964daf44aead8cab5802616ac375302458fe244f&w=826"
              className="mr-3 h-12"
              alt="logo"
            />
            <div className="text-3xl font-extrabold text-yellow-700  hover:text-white hover:bg-green-500 rounded-full p-2">
              TODO APP
            </div>
          </Link>

          <div className="flex items-center lg:order-2">
            <NavLink
              to="dnd"
              className="text-gray-800 hover:bg-orange-200 px-4 focus:ring-4 focus:ring-red-400  rounded-lg  lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Drag and Drop
            </NavLink>
            <NavLink
              to="start"
              className="text-gray-800 hover:bg-orange-200 px-4 focus:ring-4 focus:ring-red-400 rounded-lg lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get Started
            </NavLink>
          </div>

          <div
            className=" hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/" className="">Home</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
