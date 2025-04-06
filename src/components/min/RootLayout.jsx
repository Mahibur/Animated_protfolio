import React from "react"
import Navbar from "../medium/Navbar"
import Footer from "../medium/Footer"
import { Outlet } from "react-router-dom"
const RootLayout =()=>{
    return(
        <div className="w-full h-dvh bg-[#020202] px-1.5 md:px-0">
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    )
}
export default RootLayout