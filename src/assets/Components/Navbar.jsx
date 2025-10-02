import React from "react";
import PlusIcon from "../plusIcon.svg";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto py-4">
          <div>
            <h1 className="text-2xl font-bold text-[#130B2D]">
              CS — Ticket System
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-7 md:mt-0">
            <ul className="flex items-center justify-center flex-col md:flex-row gap-6 text-[#000000dd]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Catalog</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
            <button className="btn flex justify-center items-center w-[140px] h-[43px] rounded-lg font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center text-white gap-2 hover:cursor-pointer hover:scale-103">
              <img src={PlusIcon} alt="" className="w-5 invert" />
              New Ticket
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
