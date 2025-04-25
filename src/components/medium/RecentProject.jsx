import React from "react"
import { Link } from "react-router-dom"


const RecentProject =({src,alt,className,num ,title})=>{
    return(
<Link to="/projectdetails" className={`bg-[rgba(0,0,0,0.15)] rounded-sm relative group ${className}`}>
            <img className="w-[305px] xl:w-[396px] 2xl:w-full block object-cover" src={src} alt={alt} />
            <div className="overlay flex absolute top-0 left-0 w-full h-full before:absolute before:w-full before:h-full before:rounded-sm before:opacity-20 before:bg-transparent group-hover:before:bg-linear-[180deg,rgba(0,0,0,0)_15%,black] transition-all duration-500">
                <div className="text flex gap-x-4 items-end justify-center p-5">
                <p className="font-segoe text-sm leading-4 text-white">{num}</p>
                <p className="font-segoe text-lg leading-5 text-white">{title}</p>
                </div>
            </div>
        </Link>
    )
}
export default RecentProject