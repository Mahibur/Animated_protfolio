import React from "react"
import Container from "../min/Container"
import ServiceHover from "../min/ServiceHover"
import glassLogo from "../../assets/images/glass_logo.png"
import hoverImg1 from "../../assets/images/hover_Img_1.png"
import hoverImg2 from "../../assets/images/hover_Img_2.png"
import hoverImg3 from "../../assets/images/hover_Img_3.png"
import hoverImg4 from "../../assets/images/hover_Img_4.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Service =()=>{
    useGSAP(() => {
    gsap.from(".one", {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "power1.out",
      scrollTrigger:{
        trigger:".one",
        start: "bottom 50%",
        end: "top 20%",
        markers: true,
      },
    });
  });

    return(
        <section className="service pt-32">
            <Container>
                <div className="one bg-red-100 flex flex-wrap justify-between">
                    <h1 className="service_head inline-block font-segoe text-base text-[#6A6A6A] uppercase tracking-[0.8px]">/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What i Do</h1>
                    <p className="max-w-[579px] font-segoe text-lg tracking-[0.1px] leading-7 text-body">I craft seamless digital experiences by blending creativity with strategy. From UX research to web & mobile UI, I design intuitive interfaces that enhance usability. Whether it’s a SaaS platform or brand identity, my goal is to make every interaction engaging and impactful.</p>
                </div>
                <div className="two flex flex-wrap items-center justify-between pt-28">
                    <div className="img">
                        <img src={glassLogo} alt="glassLogo" />
                    </div>
                    <div className="items w-[788px]">
                        <ServiceHover title="UX Research" context="Enhancing user experiences through in-depth research, usability testing, and data-driven insights." src={hoverImg1}/>
                        <ServiceHover title="Web/Mobile App UI" context="Creating visually stunning and intuitive interfaces for web and mobile applications." src={hoverImg2}/>
                        <ServiceHover title="SaaS Design" context="Designing scalable and conversion-focused SaaS platforms with seamless user flows." src={hoverImg3}/>
                        <ServiceHover title="Brand Design" context="Building unique brand identities with impactful visuals, typography, and design systems." src={hoverImg4}/>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Service