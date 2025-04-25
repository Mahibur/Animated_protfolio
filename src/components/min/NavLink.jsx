import React from "react"
import { Link } from "react-router-dom"

const NavLink =({to,text})=>{
    return(
        <Link to={to} className="py-2 pr-2 relative">
            <h3 className="font-sora font-semibold text-xl capitalize leading-6 text-[#808082] hover:text-[#010205] transition-all duration-750">{text}</h3>
        </Link>
    )
}
export default NavLink