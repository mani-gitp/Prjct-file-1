/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="">
      <div className="pt-12 md:pt-24 container bg-[#111111] rounded-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About brand */}
          <div className="space-y-6">
            <img src={Logo} alt="Logo" className="max-w-[160px]" />
            <p className="font-semibold opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sollicitudin, ipsum vel malesuada malesuada, velit turpis
              sollicitudin velit, vel tincidunt velit sapien eu velit.
            </p>
          </div>
          {/* Bottom section */}
          <div className="grid grid-cols-2 gap-8">
            <div className="">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-4 mt-6">
                <li className="cursor-pointer">LogIn</li>
                <li className="cursor-pointer">Top Courses</li>
                <li className="cursor-pointer">Team</li>
              </ul>

            </div>
            <div className="">
              <h3 className="text-xl font-bold">Other Links</h3>
              <ul className="space-y-4 mt-6">
                <li className="cursor-pointer">Testimonials</li>
                <li className="cursor-pointer">FAQ</li>
                <li className="cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="text-center border-t border-white/10 py-6 mt-10" >
          <p className="text-sm">Copyright © 2022 Hafiz M. Abdul Mannan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
