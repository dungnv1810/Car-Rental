import React from "react";
import Slider from "react-slick";

import avate01 from "../../assets/all-images/ava-1.jpg"
import avate02 from "../../assets/all-images/ava-2.jpg"
import avate03 from "../../assets/all-images/ava-3.jpg"
import avate04 from "../../assets/all-images/ava-4.jpg"
import "../../Styles/Testimonial.css"
const Testimonial = () => {
    const settings = {
        dots: true,
        infinity: true,
        autoplay: true,
        speed: 3000,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinity: true,
                    dots: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    }
    return (
        <>
            <Slider {...settings}>
                <div className="testimonial py-4 px-3">
                    <p className="section__description mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinction, itaque reiciendis ad cupiditate harum es quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporribus?
                    </p>
                    <div className="mt-3 d-flex align-items-center gap-4">
                        <img src={avate01} alt=''/>
                        <div>
                            <h6 className="mb-0 mt3">Jhon Doe</h6>
                            <p className="section__description mb-0">Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p className="section__description mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinction, itaque reiciendis ad cupiditate harum es quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporribus?
                    </p>
                    <div className="mt-3 d-flex align-items-center gap-4">
                        <img src={avate02} alt=''/>
                        <div>
                            <h6 className="mb-0 mt3">Jhon Doe</h6>
                            <p className="section__description mb-0">Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p className="section__description mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinction, itaque reiciendis ad cupiditate harum es quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporribus?
                    </p>
                    <div className="mt-3 d-flex align-items-center gap-4">
                        <img src={avate03} alt=''/>
                        <div>
                            <h6 className="mb-0 mt3">Jhon Doe</h6>
                            <p className="section__description mb-0">Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p className="section__description mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinction, itaque reiciendis ad cupiditate harum es quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporribus?
                    </p>
                    <div className="mt-3 d-flex align-items-center gap-4">
                        <img src={avate04} alt=''/>
                        <div>
                            <h6 className="mb-0 mt3">Jhon Doe</h6>
                            <p className="section__description mb-0">Customer</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    )
}
export default Testimonial