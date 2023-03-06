import React from "react";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../components/Helmet/Helmet"
import HeroSlider from "../components/Ui/HeroSlider";
import FindCarForm from "../components/Ui/FindCarForm";
import AboutSection from "../components/Ui/AboutSection";
import ServicesList from "../components/Ui/ServicesList";
import CarItem from "../components/Ui/CarItem";
import BecomeDriver from "../components/Ui/BecomeDriver";
import Testimonial from "../components/Ui/Testimonial";
import BlogList from "../components/Ui/BlogList";

import carData from "../assets/data/carData"
const Home = () => {
    
    return (
        <>
            <Helmet title={'Home'}>
                <section className="p-0 hero__slider__section">
                    <HeroSlider />
                    <div className="hero__form"
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <Container>
                            <Row className="from__row">
                                <Col lg='4' md='4' className="p-0">
                                    <div className="find__cars__left">
                                        <h2>Find your best car here</h2>
                                    </div>
                                </Col>
                                <Col lg='8' md='8'>
                                    <FindCarForm/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                {/* ===== ===== */}
                <AboutSection />
                {/* ===== ===== */}
                <section>
                    <Container>
                        <Row>
                            <Col lg='12' className="mb-3 text-center">
                                <h6 className="section__subtitle"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >See our</h6>
                                <h2 className="section__title"
                                    data-aos="fade-up"
                                    data-aos-duration="2000">Popular Services</h2>
                            </Col>
                            <ServicesList/>
                        </Row>
                    </Container>
                </section>
                {/* ===== ===== */}
                <section>
                    <Container>
                        <Row>
                            <Col lg='12' className="text-center mb-3">
                                <h6 className="section__subtitle"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"> Come with</h6>
                                <h2 className="section__title"
                                    data-aos="fade-up"
                                    data-aos-duration="2000">Hot Offers</h2>
                            </Col>
                            {
                                carData.slice(0,6).map((item, index) => {
                                    return (
                                        <CarItem key={index} item={item} />
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </section>
                {/* ==== ===== */}
                <BecomeDriver/>
                {/* ==== ===== */}
                <section>
                    <Container>
                        <Col lg='12' className="text-center mb-2">
                            <h6 className="section__subtitle"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                Our clients says
                            </h6>
                            <h2 className="section__title"
                                data-aos="fade-up"
                                data-aos-duration="2000">
                                Testimonials
                            </h2>
                        </Col>
                        <Testimonial/>
                    </Container>
                </section>
                {/* ===== ===== */}
                <section>
                    <Container>
                        <Row>
                            <Col lg='12' className="text-center mb-3">
                                <h6 className="section__subtitle"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >
                                    Explore our blogs
                                </h6>
                                <h2 className="section__title"
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    Latest Blogs
                                </h2>
                            </Col>
                            <BlogList/>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}
export default Home;