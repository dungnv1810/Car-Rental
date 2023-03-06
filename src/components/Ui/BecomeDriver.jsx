import React from "react";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/toyota-offer-2.png"
import "../../Styles/BecomeDriver.css"
const BecomeDriver = () => {
    return (
        <>
            <section className="become__driver">
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12'>
                            <img src={driverImg} alt='' className="w-100" data-aos="fade-right" data-aos-duration="2000"/>
                        </Col>
                        <Col lg='6' md='6' sm='12'>
                            <h2 className="section__title become__driver__title"
                                data-aos="fade-up"
                                data-aos-duration="1500"    
                            >
                                Do You Want to Earn With Us? So Do not Be Late
                            </h2>
                            <p className="become__driver__conten"
                                data-aos="fade-up"
                                data-aos-duration="2000" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinction, itaque reiciendis ad cupiditate harum es quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporribus?
                            </p>
                            <button className="btn become__driver__btn mt-4"
                                data-aos="fade-up"
                                data-aos-duration="2300" 
                            >
                                Become a Driver
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default BecomeDriver