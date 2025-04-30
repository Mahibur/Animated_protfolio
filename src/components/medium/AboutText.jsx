import React from "react"
import Container from "../min/Container"
import bg from "../../assets/images/animate_bg.png"
const AboutText =()=>{
    return(
        <div className="text">
            <Container>
            <div className="headings flex flex-col justify-center items-center gap-y-7.5 py-80">
            <p className="font-segoe text-base text-[#6A6A6A] tracking-[0.8px] uppercase text-center">/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Me</p>
            <h1 className="max-w-[1214px] font-segoe text-[56px] tracking-[0.1px] leading-[67.5px] text-center text-h1">I build visually striking designs<br/> 
            <span className="italic">that prioritize seamless user experiences.</span></h1>
            <p className="max-w-[612px] text-center font-segoe text-lg tracking-[0.1px] leading-[21.6px] text-body">With 05 years of experience in the design industry I have been helping to bring brands to life through thoughtful design that resonates.</p>
            </div>
            <img src={bg} alt="animate_bg.png" />
            </Container>

        </div>
    )
}
export default AboutText