import React from "react";
import banner from "../../assets/images/banner.jpg";
import Container from "../min/Container";

const Banner = () => {
  return (
    <div className="banner relative sm:pt-0">
      <img className="w-full" src={banner} alt="banner.jpg" />
      <Container className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[-5%] flex flex-col">
        <div className="min flex justify-between px-1.5 xl:px-0 items-center pb-8 md:pb-25">
          <p className="font-segoe text-sm uppercase text-h1">/ 2025</p>
          <p className="font-segoe text-sm uppercase text-h1">ENGINEERING_</p>
        </div>
        <div className="heading flex flex-col justify-center">
          <h1 className="font-thunder text-center font-bold w-full text-[68px] sm:text-[150px] md:text-[180px] lg:text-[250px] xl:text-[374px] leading-none tracking-[18.7px] uppercase bg-linear-[133deg,#F1F1F1_11%,#AEAEAE_55%,#A1A1A1_100%] text-transparent bg-clip-text pb-7.5">
            Rakibkhan
          </h1>
          <h2 className="font-thunder text-center font-medium text-7xl tracking-[96.47px] uppercase bg-linear-[133deg,#EBEBEB,#A1A1A1_82%] text-transparent bg-clip-text">
            UIUXDesigner
          </h2>
        </div>
      </Container>
      <div className="gradient absolute left-0 bottom-0 w-full h-30 bg-linear-[0deg,red,rgba(0,0,0,0)_104%]"></div>
    </div>
  );
};
export default Banner;
