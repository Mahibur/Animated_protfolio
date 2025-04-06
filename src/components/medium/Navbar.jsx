import React, { useState } from "react";
import Container from "../min/Container";
import logo from "../../assets/images/logo.png";
import darkLogo from "../../assets/images/dark_logo.png";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavLink from "../min/NavLink";
import Picture from "../min/Picture";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className="pt-10 fixed w-full top-0 left-0 z-100 px-1.5">
      <Container className="flex justify-between items-center relative">
        <Link to="/" className="logo">
          <picture>
            <img src={logo} alt="logo.png" className="w-13 md:w-17" />
          </picture>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="dropdown-button border border-transparent rounded-sm relative group py-4.5 px-6 md:px-[35px] bg-[rgba(2,2,2,0.4)] cursor-pointer z-[1] before:absolute  before:left-0 before:top-0 before:w-0 before:h-full before:bg-[#EBEBEB] before:z-[-1] flex flex-col  gap-y-2 md:gap-y-3 items-end hover:before:w-full hover:border-white before:transition-all before:duration-750 transition-all duration-750 backdrop-blur-[10px]"
        >
          <div className="w-12 md:w-17.5 h-[1.5px] bg-white group-hover:bg-black transition-all duration-500"></div>
          <div className="w-6 md:w-11 h-[1.5px] group-hover:w-12 md:group-hover:w-17.5 bg-white group-hover:bg-black transition-all duration-500"></div>
        </div>
        {open && (
          <div className="main bg-[#EBEBEB] p-5 rounded-lg w-full absolute top-0 left-0 z-1 backdrop-blur-[20px]">
            <nav className="flex justify-between items-center pb-9">
              <Link className="logo">
                <picture>
                  <img
                    src={darkLogo}
                    alt="logo.png"
                    className="w-5.5 md:w-10.5"
                  />
                </picture>
              </Link>
              <div
                onClick={() => setOpen(!open)}
                className="close flex justify-center items-center cursor-pointer"
              >
                <IoCloseOutline className="text-5xl text-[#808082] hover:text-[#010101] hover:rotate-90 transition-all duration-450" />
              </div>
            </nav>
            <div className="links flex gap-x-12.5">
                <div className="one flex flex-col gap-y-2">
                    <NavLink to="/" text="Home"/>
                    <NavLink to="/about" text="About me"/>
                    <NavLink to="/portfolio" text="Portfolio"/>
                    <NavLink to="/service" text="Services"/>
                </div>
                <div className="two flex flex-col gap-y-2">
                <NavLink to="/portfolio" text="blog"/>
                <NavLink to="/service" text="Contact"/>
                </div>
            </div>
            <div className="recent-works mt-6 pt-5 flex justify-between items-center">
                <Picture src={} alt="" className=""/>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};
export default Navbar;
