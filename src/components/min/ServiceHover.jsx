import React from "react"

const ServiceHover =({title,context ,src})=>{
    return(
        <div className="main pl-4 py-10 relative before:absolute before:w-full before:h-[1px] before:bg-[rgba(89,89,89,0.50)] before:left-0 before:bottom-0 group">

        <h1 className="font-segoe text-7xl text-body group-hover:hidden">{title}</h1>
        <div className="mouse hidden justify-between items-center group-hover:flex">
            <div className="text">
                <h1 className="font-segoe text-5xl text-white pb-5">{title}</h1>
                <p className="font-segoe text-sm leading-6 text-[#999999] max-w-[436px]">{context}</p>
            </div>
            <div className="img">
                <img className="rounded-sm" src={src} alt="" />
            </div>
        </div>
        </div>
    )
}
export default ServiceHover