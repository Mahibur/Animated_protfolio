import React from "react"
import Container from "../min/Container"
import ClientReview from "../min/ClientReview"
import client_1 from "../../assets/images/client_1.png"
import client_2 from "../../assets/images/client_2.png"
import client_3 from "../../assets/images/client_3.png"

const Testimonial =()=>{
    return(
        <div className="testimonial py-32">
           <Container>
           <div className="test-head flex justify-between items-end pb-15">
                <div className="left-text">
                    <h4 className="font-segoe text-base leading-3.5 tracking-[1.26px] text-h1 uppercase pb-2">/&nbsp;&nbsp;&nbsp;&nbsp;Testimonials</h4>
                    <h3 className="font-segoe text-[56px] leading-[61.6px] tracking-[-1.26px] text-h1">What say my client</h3>
                </div>
                <div className="right-text">
                    <p className="max-w-[345px] font-segoe text-base leading-5 text-body">Throughout my career  I’ve had the privilege of working with some very talented people at a great bunch of companies.</p>
                </div>
            </div>
            <div className="test-review flex justify-between items-center">
                <ClientReview src={client_1} name="Sumit Saha" title="CEO and Co-founder at ABC Comapny" review="He made selling my home simple. No showings, no repairs—just a straightforward cash offer. I couldn’t be happier with the entire experience!"/>
                <ClientReview src={client_2} name="Sarah" title="SaaS Startup Founder" review="He made selling my home simple. No showings, no repairs—just a straightforward cash offer. I couldn’t be happier with the entire experience!"/>
                <ClientReview src={client_3} name="Amira" title="CEO of Glamii Beauty App" review="He made selling my home simple. No showings, no repairs—just a straightforward cash offer. I couldn’t be happier with the entire experience!"/>
            </div>
           </Container>
        </div>
    )
}
export default Testimonial