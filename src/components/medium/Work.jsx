import React from "react"
import Container from "../min/Container"
import workLogo from "../../assets/images/work_logo.png"
import WorkContent from "../min/WorkContent"
 const Work =()=>{
    return(
        <div className="work mt-32 pt-44.5">
           <Container className="">
            <div className="text relative">
            <h1 className="font-segoe text-[520px] tracking-[0.1px] text-h1 uppercase text-center max-w-full">Work</h1>
            <img className="absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-10%]" src={workLogo} alt="" />
            </div>
            <div className="content flex flex-col pt-67">
                <div className="one flex justify-start">
                <WorkContent/>
                </div>
                <div className="two flex justify-end">
                <WorkContent/>
                </div>
                <div className="one flex justify-start">
                <WorkContent/>
                </div>
                <div className="two flex justify-end">
                <WorkContent/>
                </div>
                <div className="one flex justify-start">
                <WorkContent/>
                </div>
            </div>
            <div className="btn pt-32">

            </div>
           </Container>
        </div>
    )
 }
 export default Work