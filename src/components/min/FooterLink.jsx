import React from "react"
import { Link } from "react-router-dom"
const FooterLink =({to,title})=>{
    return(
        <Link className="font-segoe text-lg leading-[16.5px] text-body capitalize hover:text-h1 transition-all duration-200" to={to}>{title}</Link>
    )
}
export default FooterLink