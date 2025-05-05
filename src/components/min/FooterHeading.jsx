import React from "react"

const FooterHeading =({title,className})=>{
    return(
        <h4 className={`font-segoe text-[19px] leading-[26.6px] text-body uppercase ${className}`}>{title}</h4>
    )
}
export default FooterHeading