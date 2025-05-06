import React from "react"
import comment_icon from "../../assets/images/comment_icon.png"

const ClientReview =({src,name,title,review})=>{
    return(
        <div className="card-container perspective-distant">
            <div className="card hover:rotate-y-180 relative transform-3d transition-all duration-750 group">
            <div className="front-side backface-hidden rotate-y-0">
            <img src={src} alt="client.jpg"/>
            <div className="overlay absolute bottom-[8%] left-[8%] z-[1]">
                <h4 className="font-segoe text-base leading-6 tracking-[-0.3px] text-[#DCDCDC] pb-1">{name}</h4>
                <p className="font-segoe text-sm tracking-[-0.3px] text-[#DCDCDC]">{title}</p>
            </div>
            </div>
            <div className="comment backface-hidden absolute top-0 left-0 w-full h-full rotate-y-180 bg-[#0F0F0F] z-[2] border-[1px] border-body p-10 rounded-sm flex flex-col justify-between items-start transition-all duration-450">
                <img src={comment_icon} alt="" />
                <p className="font-segoe text-[28px] text-body">{review}</p>
                <div className="intro">
                <h4 className="font-segoe text-base leading-6 tracking-[-0.3px] text-body pb-1">{name}</h4>
                <p className="font-segoe text-sm tracking-[-0.3px] text-body">{title}</p>
                </div>

            </div>
            </div>

        </div>
    )
}
export default ClientReview