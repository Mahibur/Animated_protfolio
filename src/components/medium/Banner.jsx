import React from "react";
import banner from "../../assets/images/banner.jpg";
import Container from "../min/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  useGSAP(()=>{

    gsap.from(".name",{
      y:50,
      opacity:0,
      duration:1,
      scrollTrigger:{
        scroller:"body",
        trigger:".name",
        start:"top 70%",
        end:"top 30%",
        scrub: 2,
      }
    });
    gsap.from(".title",{
      y:50,
      opacity:0,
      duration:1,
      scrollTrigger:{
        scroller:"body",
        trigger:".name",
        start:"top 70%",
        end:"top 30%",
        scrub: 2,
      }
    });
  })
  return (
    <div className="banner relative sm:pt-0">
      <img className="w-full" src={banner} alt="banner.jpg" />
      <Container className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[-5%] flex flex-col">
        <div className="min flex justify-between px-1.5 xl:px-0 items-center pb-8 md:pb-25">
          <p className="font-segoe text-sm uppercase text-h1">/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2025</p>
          <p className="font-segoe text-sm uppercase text-h1">ENGINEERING_</p>
        </div>
        <div className="heading flex flex-col justify-center relative">
          <h1 className="name font-thunder text-center font-bold w-full text-[68px] sm:text-[150px] md:text-[180px] lg:text-[250px] xl:text-[374px] leading-none tracking-[18.7px] uppercase bg-linear-[133deg,#F1F1F1_11%,#AEAEAE_55%,#A1A1A1_100%] text-transparent bg-clip-text pb-7.5">
            Rakibkhan
          </h1>
          <h2 className="title font-thunder text-center text-7xl tracking-[96.47px] uppercase bg-linear-[133deg,#EBEBEB,#A1A1A1_82%] text-transparent bg-clip-text absolute top-[77%] left-0">
            UIUXDesigner
          </h2>
        </div>
      </Container>
      <div className="gradient absolute left-0 bottom-0 w-full h-30 bg-linear-[0deg,black,rgba(0,0,0,0)_104%]"></div>
    </div>
  );
};
export default Banner;
