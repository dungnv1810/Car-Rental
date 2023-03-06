import React from "react";
import { Container, Row, Col } from "reactstrap";

import aboutUs from "../../assets/all-images/cars-img/nissan-offer.png"

import "../../Styles/AboutSection.css"
const AboutSection = ({aboutClass}) => {
    return (
        <section className="about__section" style={aboutClass === 'aboutPage' ? {marginTop: '0px'} : {marginTop: '180px'}}>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="about__section__content">
                            <h4
                                className="section__subtitle"
                                data-aos="fade-up"
                                data-aos-duration="1500">About US</h4>
                            <h2 className="section__title"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >Welcome to car rent service</h2>
                            <p className="section__description"
                                data-aos="fade-up"
                                data-aos-duration="2500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinction, itaque reiciendis ad cupiditate harum es quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporribus?
                            </p>
                            <div className="about__section__item d-flex align-items-center gap-5"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                                >
                                <p className="d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>
                                <p className="d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className="about__section__item d-flex align-items-center gap-5"
                                data-aos="fade-up"
                                data-aos-duration="3000">
                                <p className="d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>
    
                                <p className="d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="about__img">
                            <img src={aboutUs} alt=''
                                className="w-100"
                                data-aos="fade-left"
                                data-aos-duration='1500' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default AboutSection