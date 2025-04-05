import React from "react"
import Container from "../min/Container"
import logo from "../../assets/images/logo.png"
import { HiOutlineMenuAlt4 } from "react-icons/hi"


const Navbar = ()=>{
    return(
        <nav className="pt-10 fixed w-full top-0 left-0 z-100">
            <Container className="flex justify-between items-center">
                <div className="logo">
                    <picture>
                        <img src={logo} alt="logo.png" className="w-13 md:w-17" />
                    </picture>
                </div>
                <div className="dropdown border border-transparent relative group py-4.5 px-[35px] bg-[rgba(2,2,2,0.4)] cursor-pointer z-[1] before:absolute  before:left-0 before:top-0 before:w-0 before:h-full before:bg-[#EBEBEB] before:z-[-1] flex flex-col  gap-y-3 items-end hover:before:w-full hover:border-white before:transition-all before:duration-750 transition-all duration-750">
                    <div className="w-17.5 h-[1.5px] bg-white group-hover:bg-black transition-all duration-500"></div>
                    <div className="w-11 h-[1.5px] group-hover:w-17.5 bg-white group-hover:bg-black transition-all duration-500"></div>
                </div>
            </Container>
        </nav>
    )
}
export default Navbar