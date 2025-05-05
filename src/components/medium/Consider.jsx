import React from "react"
import Container from "../min/Container"
import ConsiderBox from "../min/ConsiderBox"
import consider_icon_1 from "../../assets/images/consider_icon_1.png"
import consider_icon_2 from "../../assets/images/consider_icon_2.png"
import consider_icon_3 from "../../assets/images/consider_icon_3.png"
import consider_icon_4 from "../../assets/images/consider_icon_4.png"
import consider_icon_5 from "../../assets/images/consider_icon_5.png"
import consider_icon_6 from "../../assets/images/consider_icon_6.png"
const Consider =()=>{
    return(
        <div className="consider pt-32">
            <Container>
                <div className="consider_heading relative after:absolute after:top-0 after:right-1/3 after:-translate-x-1/2 after:w-0.5 after:h-full after:bg-[rgba(255,255,255,0.1)] before:absolute before:top-0 before:left-1/3 before:-translate-x-1/2 before:w-0.5 before:h-full before:bg-[rgba(255,255,255,0.1)]">
                <h1 className="consider-text pt-77 pb-99 text-[#A1A1A1] font-segoe text-[150px] tracking-[0.1px] uppercase text-center">Why Consider Me</h1>
                </div>
            <div className="content-main relative h-[1928px]">
                    <ConsiderBox className="gap-y-10.25 absolute top-0 left-1/2 -translate-x-1/2" title="User's Valentine" src={consider_icon_1} content="I make users happy and your KPIs happier. Great design isn’t just pretty— it gets results"/>
                    <ConsiderBox className="gap-y-10 absolute top-[20%] left-0" title="Mobile Maniac" src={consider_icon_2} content="Designed for thumbs because people scroll like their lives depends on it."/>
                    <ConsiderBox className="gap-y-10.25 absolute top-[30%] right-[8%]" title={`Developer "friendly"`} src={consider_icon_3} content="Ended the 200 year war between designers and developers. Later I rejected knighthood"/>
                    <ConsiderBox className="gap-y-10.25 absolute bottom-[32%] left-[5%] " title="Redesign Master" src={consider_icon_4} content={`Client's can't believe it's their old website. They also call me their "Sensai"`}/>
                    <ConsiderBox className="gap-y-22.25 absolute bottom-[15%] left-[53%] -translate-x-1/2" title="UX Expert" src={consider_icon_5} content="No dark UX patterns nor dark arts were used. No animals were harmed in this process"/>
                    <ConsiderBox className="gap-y-16.25 absolute bottom-0 right-0" title="Accessible for all" src={consider_icon_6} content="Yes --- including those who wear double lens spectacles"/>
            </div>
            </Container>
        </div>
    )
}
export default Consider