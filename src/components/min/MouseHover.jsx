import React from "react"

const MouseHover =({title,className})=>{
    return(
        <div className={`mousehover mix-blend-difference fixed w-30 h-30 rounded-[50%] flex justify-center items-center ${className}`}>
            <p className="font-segoe text-base text-black capitalize">{title}</p>
        </div>
    )
}
export default MouseHover