import React from "react"
import Container from "../min/Container"
import workLogo from "../../assets/images/work_logo.png"
import WorkContent from "../min/WorkContent"
import work1 from "../../assets/images/work_1.jpg"
import work2 from "../../assets/images/work_2.jpg"
import work3 from "../../assets/images/work_3.jpg"
import work4 from "../../assets/images/work_4.jpg"
import work5 from "../../assets/images/work_5.jpg"
import { GoArrowRight } from "react-icons/go"
 const Work =()=>{
    return(
        <div className="work mt-32 pt-44.5">
           <Container className="">
            <div className="text relative">
            <h1 className="font-segoe text-[520px] tracking-[0.1px] text-h1 uppercase w-full">Work</h1>
            <img className="absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-10%]" src={workLogo} alt="" />
            </div>
            <div className="content flex flex-col pt-67">
                <div className="one flex justify-start">
                <WorkContent src={work1}/>
                </div>
                <div className="two flex justify-end">
                <WorkContent src={work2}/>
                </div>
                <div className="one flex justify-start">
                <WorkContent src={work3}/>
                </div>
                <div className="two flex justify-end">
                <WorkContent src={work4}/>
                </div>
                <div className="one flex justify-start">
                <WorkContent src={work5}/>
                </div>
            </div>
            <div className="btn py-32 flex justify-center">
                <button className="group flex items-center gap-x-3 border-[1px] border-white rounded-sm relative group py-3 px-18 bg-[rgba(2,2,2,0.4)] cursor-pointer z-[1] before:absolute  before:left-0 before:top-0 before:w-0 before:h-full before:bg-[#EBEBEB] before:z-[-1] hover:before:w-full before:transition-all before:duration-750 transition-all duration-750">
                    <h1 className="font-segoe text-sm text-white uppercase group-hover:text-black leading-[13.2px] transition-all duration-750">View All</h1>
                    <GoArrowRight className="text-white group-hover:text-black group-hover:-rotate-45 transition-all duration-250"/>
                </button>
            </div>
           </Container>
        </div>
    )
 }
 export default Work