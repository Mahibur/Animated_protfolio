import React from "react"
import Container from "../min/Container"
import footer_img from "../../assets/images/footer_logo.png"
import FooterHeading from "../min/FooterHeading"
import FooterLink from "../min/FooterLink"
import SocialLink from "../min/SocialLink"

const Footer =()=>{
    return(
        <div className="footer pt-32 border-t-[1px] border-t-[rgba(78,78,78,0.5)]">
            <Container>
                <div className="footer_main flex justify-between">
                <div className="left">
                    <FooterHeading className="pb-2.5" title="Get in touch"/>
                    <p className="font-segoe text-lg leading-[16.5px] text-body pb-3">mr.uiuxmaestro@gmail.com</p>
                    <p className="font-segoe text-lg leading-[16.5px] text-body pb-3">+8801821-981000</p>
                </div>
                <div className="right flex gap-x-27.5 items-start">
                    <div className="right1 flex gap-x-43.5 items-start">
                        <div className="part1">
                        <FooterHeading className="pb-2.5" title="Menu"/>
                        <div className="options1 flex flex-col gap-y-3">
                            <FooterLink to="/" title="Home"/>
                            <FooterLink to="/about" title="About"/>
                            <FooterLink to="/portfolio" title="Portfolio"/>
                            <FooterLink to="/services" title="Services"/>
                            <FooterLink to="/contact" title="Contact"/>
                        </div>
                        </div>
                        <div className="part2">
                        <FooterHeading className="pb-4" title="Social Media"/>
                        <div className="options2 flex flex-col gap-y-3">
                            <SocialLink link="https://www.linkedin.com/in/mahibur-rahman-b2a089275/" title="LinkedIn"/>
                            <SocialLink link="https://www.facebook.com/mahibur.rahman.326055" title="Facebook"/>
                            <SocialLink link="https://x.com/mmahibur2299" title="Twitter"/>
                        </div>
                        </div>
                    </div>
                    <div className="right2">
                        <img src={footer_img} alt="footer_img" />
                    </div>
                </div>
                </div>
            </Container>
        </div>
    )
}
export default Footer