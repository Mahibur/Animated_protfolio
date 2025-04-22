import React from "react"

const ServiceHover =({title})=>{
    return(
        <div className="main relative before:absolute before:w-full before:h-[1px] before:bg-[rgba(89,89,89,0.50)] before:left-0 before:bottom-0 group">

        <h1 className="font-segoe text-7xl text-body pl-4 py-10 hidden">{title}</h1>
        <div className="mouse flex justify-between items-center">
            <div className="text">
                <h1 className="font-segoe text-5xl text-white">{title}</h1>
            </div>
        </div>
        </div>
    )
}
export default ServiceHover