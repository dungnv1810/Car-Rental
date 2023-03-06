import React from "react";

import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/Ui/CommonSection";
import AboutSection from "../components/Ui/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/Ui/BecomeDriver"
import OurMembers from "../components/Ui/OurMembers";

import driveImg from "../assets/all-images/drive.jpg"

import "../Styles/About.css"
const About = () => {
    return (
        <>
            <Helmet title={'About'}>
                <CommonSection title={'About Us'} />
                <AboutSection aboutClass={'aboutPage'}/>
                <section className="about__page__section">
                    <Container>
                        <Row>
                            <Col lg='6' md='6' sm='12' className="mb-4">
                                <div className="about__page__img"
                                    data-aos="fade-right"
                                    data-aos-duration="1500"
                                >
                                    <img src={driveImg} alt='' className="w-100 rounded-3" />
                                </div>
                            </Col>
                            <Col lg='6' md='6' sm='12'>
                                <div className="about__page__content">
                                    <h2 className="section__title"
                                        data-aos="fade-up"
                                        data-aos-duration="500">
                                        We Are Committed To Provide Safe Ride Soluttions
                                    </h2>
                                    <p className="section__description"
                                        data-aos="fade-up"
                                        data-aos-duration="1000">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinction, itaque reiciendis ad cupiditate harum es quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporribus?
                                    </p>
                                    <p className="section__description"
                                        data-aos="fade-up"
                                        data-aos-duration="1500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinction, itaque reiciendis ad cupiditate harum es quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporribus?
                                    </p>
                                    <div className="d-flex align-items-center gap-3 mt-4"
                                        data-aos="fade-up"
                                        data-aos-duration="2500">
                                        <span><i class="ri-phone-line"></i></span>
                                        <div>
                                            <h6 className="section__subtitle mb-0">
                                                Need Any Help?
                                            </h6>
                                            <h4 className="mb-0">0345 630 366</h4>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <BecomeDriverSection />
                <section>
                    <Container>
                        <Row>
                            <Col lg='12' className="text-center mb-3">
                                <h6 className="section__subtitle"
                                    data-aos="fade-up"
                                    data-aos-duration="1500">Experts</h6>
                                <h2 className="section__title"
                                    data-aos="fade-up"
                                    data-aos-duration="2000">Our Members</h2>
                            </Col>
                            <OurMembers/>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}
export default About;