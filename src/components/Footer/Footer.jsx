import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import "../../Styles/Footer.css"
const quickLinks = [
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '#',
        display: 'Privacy Policy'
    },
    {
        path: '/cars',
        display: 'Car Listing'
    },
    {
        path: '/blogs',
        display: 'Blog'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
]
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col lg='4' md='4' sm='12' data-aos="fade-up" data-aos-duration="1000">
                            <div className="logo footer__logo">
                                <h1>
                                    <Link to="/home" className="d-flex align-items-center gap-3">
                                        <i class="ri-car-line"></i>
                                        <span>Rent Car <br/> Service</span>
                                    </Link>
                                </h1>
                            </div>
                            <p className="footer__logo__content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consequuntur, distinction, itaque reiciendis ad cupiditate
                                harum es
                                quam veniam, omnis expedita animi quibusdam obcaecati
                                mollitia?
                                Delectus et ad illo recusandae temporribus?
                            </p>
                        </Col>
                        <Col lg='2' md='4' sm='6' data-aos="fade-up" data-aos-duration="1500">
                            <div className="mb-4">
                                <h5 className="footer__link__title">
                                    Quick Links
                                </h5>
                                <ListGroup>
                                    {
                                        quickLinks.map((item, index) => {
                                            return (
                                                <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                                                    <Link to={item.path}>{item.display}</Link>
                                                </ListGroupItem>
                                            )
                                        })
                                    }
                                </ListGroup>
                            </div>
                        </Col>
                        <Col lg='3' md='4' sm='6' data-aos="fade-up" data-aos-duration="2000">
                            <div className="mb-4">
                                <h5 className="footer__link__title mb-4">Head Office</h5>
                                <p className="office__info">Address: 123 Zindabazar, Sylhet, Bangladesh</p>
                                <p className="office__info">Phone: 0345 630 366</p>
                                <p className="office__info">Email: dungcoi459@gmail.com</p>
                                <p className="office__info">Office Time: 10am - 7pm</p>
                            </div>
                        </Col>
                        <Col lg='3' md='4' data-aos="fade-up" data-aos-duration="2500">
                            <div className="mb-4">
                                <h5 className="footer__link__title mb-4">Newsletter</h5>
                                <p className="section__description">Subscribe our newsletter</p>
                                <div className="newsletter">
                                    <input type='email' placeholder="Email" />
                                    <span><i class="ri-send-plane-line"></i></span>
                                </div>
                            </div>
                        </Col>
                        <Col lg='12'>
                            <div className="footer__bottom">
                                <p className="section__description d-flex align-items-center justify-content-center">
                                    <i class="ri-copyright-line"></i>
                                    Copyright {year} Developed by Muhibur. All right reserved
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default Footer