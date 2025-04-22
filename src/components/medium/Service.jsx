import React from "react"
import Container from "../min/Container"
import ServiceHover from "../min/ServiceHover"
import glassLogo from "../../assets/images/glass_logo.png"

const Service =()=>{
    return(
        <section className="pt-37">
            <Container>
                <div className="one flex justify-between">
                    <h1 className="font-segoe text-base text-[#6A6A6A] uppercase tracking-[0.8px]">/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What i Do</h1>
                    <p className="max-w-[579px] font-segoe text-lg tracking-[0.1px] leading-7 text-body">I craft seamless digital experiences by blending creativity with strategy. From UX research to web & mobile UI, I design intuitive interfaces that enhance usability. Whether it’s a SaaS platform or brand identity, my goal is to make every interaction engaging and impactful.</p>
                </div>
                <div className="two flex flex-wrap items-center gap-x-33 pt-28">
                    <div className="img">
                        <img src={glassLogo} alt="" />
                    </div>
                    <div className="items">
                        <ServiceHover/>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Service