import React from "react"
import { Link } from "react-router-dom"

const NavLink =({to,text})=>{
    return(
        <Link to={to} className="py-2 pr-2 relative before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1.5px] before:bg-[#010205] hover:before:w-full before:transition-all before:duration-750">
            <h3 className="font-sora font-semibold text-xl capitalize leading-6 text-[#808082] hover:text-[#010205] transition-all duration-750">{text}</h3>
        </Link>
    )
}
export default NavLink