import React from "react";
import Container from "../min/Container";
import profile from "../../assets/images/profile.png";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
const Profile = () => {
  return (
    <div className="intro bg-[#D6D6D6] py-32 mt-40">
      <Container className="flex flex-wrap gap-x-25 items-start">
        <div className="text">
          <p className="font-segoe text-base tracking-[0.8px] text-bg uppercase">
            /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile
          </p>
          <div className="content max-w-[690px] mt-60">
            <h3 className="font-segoe text-5xl tracking-[0.1px] leading-[57.6px] text-bg text-right italic w-full">
              Hey’ This is Rakib Khan
            </h3>
            <h4 className="font-segoe text-5xl tracking-[0.1px] leading-[57.6px] text-bg">
              For over five years, I have been dedicate{" "}
              <span className="italic">
                crafting intuitive and engaging digital experiences.
              </span>
            </h4>
          </div>
        </div>
        <div className="img_text flex flex-col">
          <img className="w-101" src={profile} alt="profile.png" />
        <div className="img-content">
        <p className="max-w-[554px] font-segoe text-lg leading-7 tracking-[0.1px] text-bg pb-10">
            As a passionate UI/UX designer with a strong background in crafting
            intuitive and visually compelling digital experiences. With
            expertise in website design, mobile apps, SaaS platforms, branding,
            and interactive prototyping, I transform ideas into engaging user
            interfaces that drive results.
          </p>
          <div className="button flex gap-x-10 items-center">
            <button className="group flex items-center gap-x-3 border-[1px] border-black rounded-sm relative group py-3 px-15 bg-transparent cursor-pointer z-[1] before:absolute  before:left-0 before:top-0 before:w-0 before:h-full before:bg-black before:z-[-1] hover:before:w-full before:transition-all before:duration-750 transition-all duration-750">
              <h1 className="font-segoe text-sm text-black uppercase group-hover:text-white leading-[13.2px] transition-all duration-750">
                Learn More
              </h1>
              <GoArrowRight className="text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-250" />
            </button>
            <div className="btn2 flex cursor-pointer gap-x-2.5 items-center group">
                <h1 className="font-segoe text-base leading-5 text-bg">Download CV</h1>
                <div className="p-3 rounded-[50%] border-[1px] border-black group-hover:bg-black transition-all duration-500">
                <MdOutlineFileDownload className="text-lg font-bold group-hover:text-white transition-all duration-200"/>
                </div>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
};
export default Profile;
