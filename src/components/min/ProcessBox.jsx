import React from "react"
const ProcessBox =({num,title,content,className,textclass})=>{
    return(
        <div className={`processbox p-7 bg-transparent hover:bg-[rgba(44,44,44,0.3)] flex flex-col max-w-[450px] border-[1px] border-[rgba(78,78,78,0.5)] rounded-sm transition-all duration-750 ${className}`}>
            <h4 className="font-segoe text-sm leading-5 text-body text-right">/&nbsp;&nbsp;{num}</h4>
            <div className="box-text">
                <h2 className={`font-segoe text-[32px] tracking-[-1.68px] leading-[38.4px] text-h1 pb-27`} >{title}</h2>
                <p className="max-w-[387px] font-segoe text-base leading-6 text-body">{content}</p>
            </div>
        </div>
    )
}
export default ProcessBox