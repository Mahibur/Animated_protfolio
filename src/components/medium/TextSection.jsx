import React from "react";
import Container from "../min/Container";
import icon from "../../assets/images/text_icon.png";

const TextSection = () => {
  return (
    <Container className="text pt-44 pb-22">
      <h1 className="font-inter text-6xl text-h1 text-center leading-[72px] relative">
        create &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;innovative designs for modern
        websites, mobile apps,
        <span className="text-[#515151]">
          and web platforms across a wide range of industries.
        </span>
        <img className="absolute top-[6%] left-[22%]" src={icon} alt="" />
      </h1>
    </Container>
  );
};
export default TextSection;
