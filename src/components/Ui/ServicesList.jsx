import React from "react";
import { Col } from "reactstrap";

import servicesData from "../../assets/data/serviceData"
import "../../Styles/ServicesList.css"
const ServicesList = () => {
    return (
        <>
            {
                servicesData.map((item, index) => {
                    return (
                        <ServicesItem key={index} item={item} />
                    )
                })
            }
        </>
    )
}

const ServicesItem = ({item}) => {
    return (
        <>
            <Col lg='4' md='4' sm='6' className="mb-2" data-aos="fade-up" data-aos-duration="2500">
                <div className="service__item">
                    <span className="mb-3 d-inline-block">
                        <i className={item.icon}></i>
                    </span>
                    <h6>{item.title}</h6>
                    <p className="service__description">{item.desc}</p>
                </div>
            </Col>
        </>
    )
}
export default ServicesList