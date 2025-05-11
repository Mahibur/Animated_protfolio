import React, { useEffect, useState } from "react";
import Container from "../min/Container";
import icon from "../../assets/images/text_icon.png";
import MouseHover from "../min/MouseHover";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const TextSection = () => {
  useGSAP(() => {
    gsap.from(".section span", {
      y: 100,
      opacity: 0,
      duration: 0.45,
      stagger: 0.15,
      ease: "power1.out",
      scrollTrigger:{
        scroller:"body",
        trigger:".section",
        start:"top 70%",
        end:"top 30%",
        scrub: 2,
      }
    });
  });
  return (
    <Container className="text pt-32 pb-22">
      <h1 className="section font-inter text-6xl text-h1 text-center leading-[72px] relative overflow-y-hidden">
        <span className="inline-block">create</span>{" "}
        <span className="img inline-block">
          <div className="w-20.5 h-12.5 bg-h1 rounded-[100px] flex items-center pl-2.5">
            <img
              className="animate-[spin_3s_linear_infinite]"
              src={icon}
              alt=""
            />
          </div>
        </span>{" "}
        <span>innovative designs for {" "} modern</span> <span>websites</span>
        <span>,</span> <span>mobile</span> <span>apps</span>
        <span>,</span>
        <div className="inline text-[#515151]">
          <span>and</span> <span>web</span> <span>platforms</span>{" "}
          <span>across</span> <span>a</span> <span>wide</span>{" "}
          <span>range</span> <span>of</span> <span>industries.</span>
        </div>
      </h1>

      <MouseHover title="Hire Me" />
    </Container>
  );
};
export default TextSection;
