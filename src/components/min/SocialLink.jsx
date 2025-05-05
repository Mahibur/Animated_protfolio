import React from "react"
import { GoArrowRight } from "react-icons/go"

const SocialLink =({link,title})=>{
    return(
        <a className="flex gap-x-1 items-center cursor-pointer" target="_blank" href={link}>
            <h4 className="font-segoe text-lg leading-[16.5px] text-body capitalize hover:text-h1 transition-all duration-200">{title}</h4>
            <GoArrowRight className="text-[12px] -rotate-45 text-body hover:text-h1 transition-all duration-200"/>
        </a>
    )
}
export default SocialLink