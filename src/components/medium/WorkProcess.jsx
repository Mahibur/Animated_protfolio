import React from "react"
import Container from "../min/Container"
import ProcessBox from "../min/ProcessBox"
import light from "../../assets/images/light.png"
const WorkProcess =()=>{
    return(
        <div className="workProcess mt-32 py-32">
            <Container className="flex gap-x-17">
                <div className="processText relative">
                    <h4 className="font-segoe text-base leading-3.5 tracking-[1.26px] text-h1 pb-2 uppercase">/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile</h4>
                    <h1 className="font-segoe text-[56px] leading-[61.6px] tracking-[-1.68px] text-h1 pb-3">Work Process</h1>
                    <p className="w-[393px] font-segoe text-base leading-5 text-h1">Throughout my career  I’ve had the privilege of working with some very talented people at a great bunch of companies.</p>
                    <img className="absolute top-[7%] left-[-1%] w-[500px]" src={light} alt="light.png" />
                </div>
                <div className="processBox pt-65 w-[66%]">
                    <ProcessBox className="gap-y-28.5" num="01" title="Discovery" content="Throughout my career  I’ve had the privilege of working with some very talented people at a great bunch of companies."/>
                    <div className="box2 flex justify-end">
                    <ProcessBox className="gap-y-16.5" num="02" title="Research" content="We uncover underutilized market possibilities and develop a plan to profit from them. We identify a successful plan by first grasping your markets, consumer motivations, competition strategies, and execution."/>
                    </div>
                    <ProcessBox num="03" title="Strategy" content="Everything begins with a plan. We will describe your project, establish milestones, and agree on project priorities. We will then have a strategic plan that is consistent with your original vision and makes your objectives attainable. You will meet with our staff to discuss your objectives and desires. From there, we begin to develop an overarching concept and direction."/>
                    <div className="box2 flex justify-end">
                    <ProcessBox className="gap-y-22.5" num="04" title="Execute" content="The final product takes form, and the idea comes to life by reflecting the visual notions. Our creative development team will examine and edit the materials to align with your objectives."/>
                    </div>
                    <ProcessBox className="gap-y-22.5" num="05" title="Deliver" content="The final product takes form, and the idea comes to life by reflecting the visual notions. Our creative development team will examine and edit the materials to align with your objectives."/>
                </div>
            </Container>
        </div>
    )
}
export default WorkProcess