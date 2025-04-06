import React from "react"
import logo from "../../assets/images/dark_logo.png"
const DropDown =({className})=>{
    return(
    <div className={`bg-blue-500 p-5 rounded-lg w-full ${className}`}>
           <div className="logo">
                            <picture>
                                <img src={logo} alt="logo.png" className="w-5.5 md:w-10.5" />
                            </picture>
                        </div>
        <h1>heading</h1>
        </div>
    )
}
export default DropDown