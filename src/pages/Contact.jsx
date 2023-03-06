import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/Ui/CommonSection"

import "../Styles/Contact.css"

const socialLink = [
    {
        id: 0,
        url: '#',
        icon: 'ri-facebook-line'
    },
    {
        id: 2,
        url: '#',
        icon: 'ri-instagram-line'
    },
    {
        id: 3,
        url: '#',
        icon: 'ri-linkedin-line'
    },
    {
        id: 4,
        url: '#',
        icon: 'ri-twitter-line'
    },
]
const Contact = () => {
    return (
        <>
            <Helmet title={'Contact'}>
                <CommonSection title={'Contact'} />
                <section>
                    <Container>
                        <Row>
                            <Col lg='7' md='7'>
                                <h6 className="fw-bold mb-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1000">Get In Touch</h6>
                                <Form>
                                    <FormGroup className="contact__from"
                                        data-aos="fade-up"
                                        data-aos-duration="1500">
                                        <Input type="text" placeholder="Your Name"/>
                                    </FormGroup>
                                    <FormGroup className="contact__from" data-aos="fade-up"
                                        data-aos-duration="2000">
                                        <Input type="" placeholder="Your Name"/>
                                    </FormGroup>
                                    <FormGroup className="contact__from" data-aos="fade-up"
                                        data-aos-duration="2500">
                                        <textarea rows={5} placeholder='Message' className="w-100 textarea"/>
                                    </FormGroup>
                                    <button className="btn contact__btn mt-2" type="submit" data-aos="fade-up"
                                        data-aos-duration="3000">Send</button>
                                </Form>
                            </Col>
                            <Col lg='5' md='5'>
                                <div className="contact__info">
                                    <h6 className="fw-bold mb-3"
                                        data-aos="fade-up"
                                        data-aos-duration="1000">
                                        Contact Information
                                    </h6>
                                    <p className="section__description mb-0" data-aos="fade-up"
                                        data-aos-duration="1500">
                                        123 Zinda Bazar Sylhet, Bangladesh
                                    </p>
                                    <div className="d-flex align-items-center gap-2" data-aos="fade-up"
                                        data-aos-duration="2000">
                                        <h6 className="fs-6 mb-0">Phone:</h6>
                                        <p className="section__description mb-0">0345 630 366</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2" data-aos="fade-up"
                                        data-aos-duration="2500">
                                        <h6 className="fs-6 mb-0">Email:</h6>
                                        <p className="section__description mb-0">dungcoi459@gmail.com</p>
                                    </div>
                                    <h6 className="fw-bold" data-aos="fade-up"
                                        data-aos-duration="3000">Follow Us</h6>
                                    <div className="d-flex align-items-center gap-3 mt-2" data-aos="fade-up"
                                        data-aos-duration="3000">
                                        {
                                            socialLink.map((item, index) => {
                                                return (
                                                    <Link key={item.id} to={item.url}><i className={item.icon}></i></Link>
                                               )
                                           }) 
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}
export default Contact;