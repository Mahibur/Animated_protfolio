import React from "react";
import Container from "../min/Container";

import icon from "../../assets/images/text_icon.png";

const TextSection = () => {
  return (
    <Container className="text pt-32 pb-22">
      <h1 className="font-inter text-6xl text-h1 text-center leading-[72px] relative">
        create <div className="img inline-block">
          <div className="w-20.5 h-12.5 bg-h1 rounded-[100px] flex items-center pl-2.5">
            <img className="animate-[spin_3s_linear_infinite]" src={icon} alt="" />
          </div>
        </div> innovative designs for modern
        websites, mobile apps,
        <span className="text-[#515151]">
          and web platforms across a wide range of industries.
        </span>
      </h1>
    </Container>
  );
};
export default TextSection;
