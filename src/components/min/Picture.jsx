import React from "react"

const Picture =({src,alt,className})=>{
    return(
        <picture className={`${className}`}>
            <img className="w-full h-full block object-cover" src={src} alt={alt} />
        </picture>
    )
}
export default Picture