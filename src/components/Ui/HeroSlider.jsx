import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "../../Styles/Hero-slider.css"
const HeroSlider = () => {
    const settings = {
        dots: true,
        fade: true,
        speed: 1000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        sliderToShow: 1,
        sliderToScroll: 1
    }
    return (
        <>
            <Slider {...settings} className="hero__slider">
                <div className="slider__item slider__item__01 mt-0">
                    <Container>
                        <div className="slider__content">
                            <h6 className="text-light mb-3">
                                For Rent $70 Per Day
                            </h6>
                            <h1>Reserve Now and Get 50% Off</h1>
                            <button className="btn reserve__btn mt-4">
                                <Link to='/cars'>
                                    Reserve Now
                                </Link>
                            </button>
                        </div>
                    </Container>
                </div>

                <div className="slider__item slider__item__02 mt-0">
                    <Container>
                        <div className="slider__content">
                            <h6 className="text-light mb-3">
                                For Rent $70 Per Day
                            </h6>
                            <h1>Reserve Now and Get 50% Off</h1>
                            <button className="btn reserve__btn mt-4">
                                <Link to='/cars'>
                                    Reserve Now
                                </Link>
                            </button>
                        </div>
                    </Container>
                </div>

                <div className="slider__item slider__item__03 mt-0">
                    <Container>
                        <div className="slider__content">
                            <h6 className="text-light mb-3">
                                For Rent $70 Per Day
                            </h6>
                            <h1>Reserve Now and Get 50% Off</h1>
                            <button className="btn reserve__btn mt-4">
                                <Link to='/cars'>
                                    Reserve Now
                                </Link>
                            </button>
                        </div>
                    </Container>
                </div>
            </Slider>
        </>
    )
}
export default HeroSlider