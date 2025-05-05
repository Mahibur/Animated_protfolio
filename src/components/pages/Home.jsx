import React from "react"
import Banner from "../medium/Banner"
import TextSection from "../medium/TextSection"
import Service from "../medium/Service"
import Work from "../medium/Work"
import AboutText from "../medium/AboutText"
import Consider from "../medium/Consider"
import WorkProcess from "../medium/WorkProcess"
import Testimonial from "../medium/Testimonial"
import Profile from "../medium/Profile"

const Home = ()=>{
    return(
        <>
        <Banner/>
        <TextSection/>
        <Service/>
        <Work/>
        <AboutText/>
        <Profile/>
        <Consider/>
        <WorkProcess/>
        <Testimonial/>
        </>
    )
}
export default Home