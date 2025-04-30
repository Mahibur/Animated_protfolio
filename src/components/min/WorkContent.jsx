import React from "react"
const WorkContent =({src})=>{
    return(
        <div className="content">
            <div className="image rounded-sm group overflow-hidden">
            <img className="object-cover rounded-sm group-hover:scale-110 transition-all" src={src} alt="" />
            </div>
            <div className="button mt-3 flex items-center gap-x-3">
                <button className="p-2 font-segoe text-[12px] tracking-[0.5px] text-[#CACACA] rounded-sm border-[1px] border-[#A0A0A0] ">UI Design</button>
                <button className="p-2 font-segoe text-[12px] tracking-[0.5px] text-[#CACACA] rounded-sm border-[1px] border-[#A0A0A0] ">UX Design</button>
            </div>
            <h1 className="pt-4 font-segoe text-3xl tracking-[0.1px] text-[#CACACA]">Pay.co Financial</h1>
        </div>
    )
}
export default WorkContent;