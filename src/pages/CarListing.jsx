import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../components/Ui/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import CarItem from "../components/Ui/CarItem"

import carData from "../assets/data/carData"
const CarListing = () => {
    return (
        <>
            <Helmet title={'Cars'}>
                <CommonSection title={'Car Listing'} />
                <section>
                    <Container>
                        <Row>
                            <Col lg='12'>
                                <div className="d-flex align-items-center gap-3 mb-5">
                                    <span className="d-flex align-items-center gap-2">
                                        <i class="ri-sort-asc"></i>Sort By
                                    </span>
                                    <select>
                                        <option>Section</option>
                                        <option value='low'>Low to High</option>
                                        <option value='high'>High to Low</option>
                                    </select>
                                </div>
                            </Col>
                            {
                                carData.map((item, index) => {
                                    return (
                                        <CarItem key={index} item={item} />
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}
export default CarListing;