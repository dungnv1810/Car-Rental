import React from "react";
import { Link } from "react-router-dom";
import {Col} from "reactstrap"

import "../../Styles/CarItem.css"
const CarItem = (props) => {
    const {id, imgUrl, model, carName, automatic, speed, price} = props.item
    return (
        <>
            <Col lg='4' md='4' sm='6' className="mb-5" data-aos="fade-up" data-aos-duration="2500">
                <div className="car__item">
                    <div className="car__img">
                        <img src={imgUrl} alt='' className="w-100"/>
                    </div>
                    <div className="car__item__content mt-4">
                        <h4 className="section__title text-center">{carName}</h4>
                        <h6 className="rent__price text-center mt-2">{price}.00 <span>/ Day</span></h6>
                        <div className="car__item__info d-flex align-items-center justify-content-between mt-3 mb-4">
                            <span className="d-flex align-items-center gap-1"><i class="ri-car-line"></i>{model}</span>
                            <span className="d-flex align-items-center gap-1"><i class="ri-settings-2-line"></i>{automatic}</span>
                            <span className="d-flex align-items-center gap-1"><i class="ri-timer-flash-line"></i>{speed}</span>
                        </div>
                        <button className="w-50 car__item__btn car__btn__rent">
                            <Link to={`/cars/${carName}`}>Rent</Link>
                        </button>
                        <button className="w-50 car__item__btn car__btn__details">
                            <Link to={`/cars/${carName}`}>Details</Link>
                        </button>
                    </div>
                </div>
            </Col>
        </>
    )
}
export default CarItem