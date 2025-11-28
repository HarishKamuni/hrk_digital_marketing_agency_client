import React, { useState } from 'react';
import { MoveUpRight, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between p-5 bg-gradient-to-r from-[#e8c8e8] md:px-10 lg:px-32">
        <img
          src="https://seoc-html-v2.vercel.app/assets/img/logo/logo1.png"
          alt="SEOC logo"
          className="w-18 cursor-pointer md:w-30 lg:w-36"
        />
        <Menu
          className="block cursor-pointer md:hidden"
          onClick={() => setShowMenu(true)}
        />

        <ul className=" hidden md:flex md:gap-2 lg:gap-10 lg:text-lg">
          <li>About</li>
          <li>Servises</li>
          <li>Works</li>
          <li>Testimonials</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
        <div className="hidden md:flex md:gap-2 lg:gap-4">
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/icons/search-icons1.svg"
            alt="search icon"
            className="w-4 cursor-pointer md:w-5 lg:w-6"
            onClick={() => setShow(true)}
          />
          <div className="flex items-center gap-2 bg-[#7207b9] rounded-full px-1 py-1 lg:py-2 lg:px-2 cursor-pointer">
            <h1 className="text-white text-sm capitalize pl-2 lg:text-lg lg:font-semibold lg:pl-2">
              free consultation
            </h1>
            <ArrowUpRight className="text-[#7207b9] bg-white rounded-full w-4 h-4 lg:w-8  lg:h-8 lg:p-1" />
          </div>
        </div>
      </nav>
      {showMenu && (
        <section className="absolute top-0 bg-white w-full">
          <div className="menu-section block md:hidden relative ml-5">
            <X
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
            <div className="flex flex-col mt-5 gap-7">
              <img
                src="https://seoc-html-v2.vercel.app/assets/img/logo/logo1.png"
                alt="SEOC logo"
                className="w-36"
              />
              <ul className="flex flex-col gap-5 text-xl ml-1">
                <li>Home</li>
                <li>About</li>
                <li>Servises</li>
                <li>Works</li>
                <li>Testimonials</li>
                <li>Blogs</li>
                <li>Contact</li>
              </ul>
              <div className="flex gap-3 bg-[#7207b9] justify-center items-center py-2 rounded-full mx-4 hover:cursor-pointer">
                <span className="text-white text-lg font-bold">
                  Get Started
                </span>{' '}
                <ArrowUpRight className="rounded-full bg-white text-[#7207b9] w-7 h-7 p-[5px]" />
              </div>
            </div>
          </div>
        </section>
      )}
      {show && (
        <div className="absolute top-0 left-0 bg-white w-full">
          {' '}
          <div className="flex justify-center h-[450px] items-center relative ">
            <div className="cursor-pointer hover:opacity-80">
              <span className="absolute bg-gray-400 top-0 right-0 w-14 h-14 opacity-20"></span>
              <X
                className="absolute top-2 right-2 w-10 h-10 opacity-100 "
                onClick={() => setShow(false)}
              />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="border-b border-gray-400 w-5xl text-4xl outline-0"
            />
            <span>
              <img
                src="https://seoc-html-v2.vercel.app/assets/img/icons/search-icons1.svg"
                alt="search icon"
                className="w-4 cursor-pointer md:w-5 lg:w-7"
              />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
