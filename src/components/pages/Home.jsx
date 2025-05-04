import React from "react"
import Banner from "../medium/Banner"
import TextSection from "../medium/TextSection"
import Service from "../medium/Service"
import Work from "../medium/Work"
import AboutText from "../medium/AboutText"
import Introduction from "../medium/Profile"
import Consider from "../medium/Consider"

const Home = ()=>{
    return(
        <>
        <Banner/>
        <TextSection/>
        <Service/>
        <Work/>
        <AboutText/>
        <Introduction/>
        <Consider/>
        </>
    )
}
export default Home