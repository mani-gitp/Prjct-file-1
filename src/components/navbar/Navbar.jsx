/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import ResponsiveMenu from "./ResponsiveMenu";
const MenuData = [
  {
    id: 1,
    title: "Home",
    url: "#",
  },
  {
    id: 2,
    title: "Youtube Blueprint Course",
    url: "#",
  },
  {
    id: 3,
    title: "ChatGPT Course",
    url: "#",
  },
  {
    id: 4,
    title: "Time Management Course",
    url: "#",
  },
  {
    id: 5,
    title: "E-books",
    url: "#",
  },
];
const Navbar = () => {
  return (
    <>
      <nav className=" text-white">
        <div className="bg-black/50 backdrop-blur-3xl container flex justify-between rounded-full py-3 z-[9999]">
          {/* Logo section */}
          <div>
            <img src={Logo} alt="" className="max-w-[120px]" />
          </div>
          {/* Menu section */}
          <div>
            <ul className="flex items-center gap-4">
              {MenuData.map((item) => {
                return (
                  <li key={item.id} className="hidden md:block">
                    <a
                      href={item.url}
                      className="uppercase text-xs hover:border-b border-white duration-300"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <li>
                <button className="border border-white px-4 py-2 rounded-full">LogIn</button>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Responsive menu */}
        {/* <ResponsiveMenu isOpen={isOpen} /> */}
      </nav>
    </>
  );
};

export default Navbar;