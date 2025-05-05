import React from "react"
import Container from "../min/Container"

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
            <div className="test-review">
                
            </div>
           </Container>
        </div>
    )
}
export default Testimonial