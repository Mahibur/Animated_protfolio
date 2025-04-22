import React, { useState } from "react";
import Container from "../min/Container";
import logo from "../../assets/images/logo.png";
import darkLogo from "../../assets/images/dark_logo.png";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavLink from "../min/NavLink";
import RecentProject from "./RecentProject";
import dropdown_1 from "../../assets/images/dropdown_1.png"
import dropdown_2 from "../../assets/images/dropdown_2.png"
import dropdown_3 from "../../assets/images/dropdown_3.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="pt-10 sm:absolute sm:w-full sm:top-0 sm:left-0 sm:z-100 px-1.5">
      <Container className="flex justify-between items-center relative">
        <Link to="/" className="logo">
          <picture>
            <img src={logo} alt="logo.png" className="h-12" />
          </picture>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="dropdown-button border border-transparent rounded-sm relative group py-4.5 px-6 md:px-[35px] bg-[rgba(2,2,2,0.4)] cursor-pointer z-[1] before:absolute  before:left-0 before:top-0 before:w-0 before:h-full before:bg-[#EBEBEB] before:z-[-1] flex flex-col  gap-y-2 md:gap-y-3 items-end hover:before:w-full hover:border-white before:transition-all before:duration-750 transition-all duration-750 backdrop-blur-[10px]"
        >
          <div className="w-12 md:w-17.5 h-[1.5px] bg-white group-hover:bg-black transition-all duration-500"></div>
          <div className="w-6 md:w-11 h-[1.5px] group-hover:w-12 md:group-hover:w-17.5 bg-white group-hover:bg-black transition-all duration-500"></div>
        </div>
        {
          <div className={`main transition-all duration-750 bg-[#EBEBEB] p-5 rounded-lg w-full absolute top-0 left-0 z-1 backdrop-blur-[20px] ${open? "trnaslate-y-0": "-translate-y-350"}`}>
            <nav className="flex justify-between items-center pb-9">
              <Link to="/" className="logo">
                <picture>
                  <img
                    src={darkLogo}
                    alt="logo.png"
                    className="h-12"
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
                    <NavLink to="/services" text="Services"/>
                </div>
                <div className="two flex flex-col gap-y-2">
                <NavLink to="/blog" text="blog"/>
                <NavLink to="/contact" text="Contact"/>
                </div>
            </div>
            <div className="recent-works mt-6 pt-5 hidden lg:flex lg:gap-x-5 flex-wrap lg:justify-center xl:justify-between items-center">
                <RecentProject src={dropdown_1} alt="dropdown_1" num="/01" title="Business Consultant website"/>
                <RecentProject src={dropdown_2} alt="dropdown_2" num="/02" title="Portfolio website"/>
                <RecentProject src={dropdown_3} alt="dropdown_3" num="/03" title="Corporate UI/UX"/>
            </div>
          </div>
        }
      </Container>
    </nav>
  );
};
export default Navbar;
