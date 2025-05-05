import React from "react";
import Container from "../min/Container";
import { GoArrowRight } from "react-icons/go";
const ContactSection = () => {
  return (
    <div className="contact py-32">
      <Container className=" flex justify-between items-start">
        <div className="left">
          <h4 className="font-segoe text-base leading-3.5 tracking-[1.26px] text-h1 uppercase pb-2">
            /&nbsp;&nbsp;&nbsp;&nbsp;Contact
          </h4>
          <h3 className="font-segoe text-[56px] leading-[61.6px] tracking-[-1.26px] text-h1 pb-3 uppercase">
            LET'S WORK TOGETHER
          </h3>
          <p className="font-segoe text-base leading-5 text-body max-w-[603px]">
            Throughout my career I’ve had the privilege of working with some
            very talented people at a great bunch of companies.
          </p>
        </div>
        <div className="right_form w-[670px] flex flex-col gap-y-12.5 items-start">
          <div className="name flex flex-col gap-y-1 w-full">
            <label
              className="font-segoe text-sm leading-[20.2px] text-[rgba(255,255,255,0.8)]"
              htmlFor=""
            >
              Name
            </label>
            <input
              className="py-2 outline-none bg-transparent border-b-[1px] border-b-[rgba(255,255,255,0.32)] font-segoe text-base text-[rgba(255,255,255,0.4)] placeholder:font-segoe placeholder:text-base placeholder:text-[rgba(255,255,255,0.4)]"
              type="text"
              placeholder="Jhon Doe"
            />
          </div>
          <div className="email flex flex-col gap-y-1 w-full">
            <label
              className="font-segoe text-sm leading-[20.2px] text-[rgba(255,255,255,0.8)]"
              htmlFor=""
            >
              Email
            </label>
            <input
              className="py-2 outline-none bg-transparent border-b-[1px] border-b-[rgba(255,255,255,0.32)] font-segoe text-base text-[rgba(255,255,255,0.4)] placeholder:font-segoe placeholder:text-base placeholder:text-[rgba(255,255,255,0.4)]"
              type="email"
              placeholder="hello@example.com"
            />
          </div>
          <div className="work_place flex flex-col gap-y-1 w-full">
            <label
              className="font-segoe text-sm leading-[20.2px] text-[rgba(255,255,255,0.8)]"
              htmlFor=""
            >
              I work at (optional)
            </label>
            <input
              className="py-2 outline-none bg-transparent border-b-[1px] border-b-[rgba(255,255,255,0.32)] font-segoe text-base text-[rgba(255,255,255,0.4)] placeholder:font-segoe placeholder:text-base placeholder:text-[rgba(255,255,255,0.4)]"
              type="text"
              placeholder="Company name"
            />
          </div>
          <div className="name flex flex-col gap-y-1 w-full">
            <label
              className="font-segoe text-sm leading-[20.2px] text-[rgba(255,255,255,0.8)]"
              htmlFor=""
            >
              Details about the project
            </label>
            <input
              className="pt-2 pb-22.25 outline-none bg-transparent border-b-[1px] border-b-[rgba(255,255,255,0.32)] font-segoe text-base text-[rgba(255,255,255,0.4)] placeholder:font-segoe placeholder:text-base placeholder:text-[rgba(255,255,255,0.4)]"
              type="text"
              placeholder="My project is about..."
            />
          </div>
          <div className="btn">
            <button className="group flex items-center gap-x-3 border-[1px] border-white rounded-sm relative group py-3.25 px-21.25 bg-transparent cursor-pointer z-[1] before:absolute  before:left-0 before:top-0 before:w-0 before:h-full before:bg-white before:z-[-1] hover:before:w-full before:transition-all before:duration-750 transition-all duration-750">
              <h1 className="font-segoe text-sm text-white uppercase group-hover:text-black leading-[13.2px] transition-all duration-750">
                Send
              </h1>
              <GoArrowRight className="text-white group-hover:text-black group-hover:-rotate-45 transition-all duration-250" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ContactSection;
