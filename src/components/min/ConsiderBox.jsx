import React from "react"
const ConsiderBox =({title,className,src,content})=>{
    return(
        <div className={`box max-w-81 p-7.5 rounded-sm backdrop-blur-[55px] bg-[rgba(152,152,152,0.20)] border-[1px] border-[rgba(152,152,152,0.30)] flex flex-col ${className}`}>
            <h3 className="font-segoe font-semibold text-5xl leading-[48px] tracking-[0.1px] text-white capitalize">{title}</h3>
            <div className="2ndpart">
                <img className="w-12" src={src} alt="icon.png" />
                <p className="font-segeo text-base leading-6 tracking-[0.1px] text-[#C0C0C0] pt-7.5 capitalize">{content}</p>
            </div>
        </div>
    )
}
export default ConsiderBox