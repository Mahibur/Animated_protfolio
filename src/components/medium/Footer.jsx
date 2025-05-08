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
                            <SocialLink link="https://www.linkedin.com/in/rakibkhan-uiux/" title="LinkedIn"/>
                            <SocialLink link="https://www.facebook.com/profile.php?id=100088808449657" title="Facebook"/>
                            <SocialLink link="https://x.com/rakib18686324" title="Twitter"/>
                        </div>
                        </div>
                    </div>
                    <div className="right2">
                        <img src={footer_img} alt="footer_img" />
                    </div>
                </div>
                </div>
                <div className="copyright flex justify-between items-center pt-45">
                    <div className="copyright-left flex gap-x-3 items-center">
                        <h5 className="font-segeo text-lg leading-[16.5px] text-body">©2025</h5>
                        <h5 className="font-segeo text-lg leading-[16.5px] text-body capitalize">Privacy | Policy</h5>
                    </div>
                    <div className="copyright-right">
                        <h4 className="font-segeo text-lg leading-[16.5px] text-body">Designed by Rakib Khan®</h4>
                    </div>
                </div>
                <div className="large-text relative py-30 overflow-y-hidden">
                <h1 className="absolute top-0 left-0 font-thunder font-bold leading-none text-[386px] bg-linear-[35deg,#F1F1F1_11%,#AEAEAE_35%,#A1A1A1_100%] text-transparent bg-clip-text tracking-[19.7px] uppercase w-full">Let’s Talk</h1>
                </div>
            </Container>
        </div>
    )
}
export default Footer