import React from "react"
import comment_icon from "../../assets/images/comment_icon.png"

const ClientReview =({src,name,title})=>{
    return(
        <div className="img relative group rounded-sm">
            <img src={src} alt="client.jpg" />
            <div className="overlay absolute bottom-[8%] left-[8%] z-[1]">
                <h4 className="font-segoe text-base leading-6 tracking-[-0.3px] text-[#DCDCDC] pb-1">Sumit Saha</h4>
                <p className="font-segoe text-sm tracking-[-0.3px] text-[#DCDCDC]">CEO and Co-founder at ABC Comapny</p>
            </div>
            <div className="comment absolute top-0 left-0 w-full h-full bg-[#0F0F0F] z-[2] border-[1px] border-body p-10 rounded-sm flex flex-col justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-750">
                <img src={comment_icon} alt="" />
                <p className="font-segoe text-[28px] text-body">He made selling my home simple. No showings, no repairs—just a straightforward cash offer. I couldn’t be happier with the entire experience!</p>
                <div className="intro">
                <h4 className="font-segoe text-base leading-6 tracking-[-0.3px] text-body pb-1">Sumit Saha</h4>
                <p className="font-segoe text-sm tracking-[-0.3px] text-body">CEO and Co-founder at ABC Comapny</p>
                </div>

            </div>

        </div>
    )
}
export default ClientReview