import React from "react";
import {Col} from "reactstrap"
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg"
import ava02 from "../../assets/all-images/ava-2.jpg"
import ava03 from "../../assets/all-images/ava-3.jpg"
import ava04 from "../../assets/all-images/ava-4.jpg"

import "../../Styles/OurMembers.css"
const OUR__MEMBERS = [
    {
        name: 'jhon Doe',
        experience: '5 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: ava01
    },
    {
        name: 'jhon Doe',
        experience: '5 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: ava02
    },
    {
        name: 'jhon Doe',
        experience: '5 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: ava03
    },
    {
        name: 'jhon Doe',
        experience: '5 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: ava04
    },
]
const OurMembers = () => {
    return (
        <>
            {
                OUR__MEMBERS.map((item, index) => {
                    return (
                        <Col lg='3' md='3' sm='4' xs='6' key={index} className="mb-3"
                            data-aos="fade-up"
                            data-aos-duration="2500">
                            <div className="single__member">
                                <div className="single__member__img">
                                    <img src={item.imgUrl} alt='' className="w-100"/>
                                    <div className="single__member__social">
                                        <Link to={item.fbUrl}><i class="ri-facebook-line"></i></Link>
                                        <Link to={item.instUrl}><i class="ri-instagram-line"></i></Link>
                                        <Link to={item.twitUrl}><i class="ri-twitter-line"></i></Link>
                                        <Link to={item.linkedinUrl}><i class="ri-linkedin-line"></i></Link>
                                    </div>
                                </div>
                                <h6 className="text-center mb-2 mt-3">{item.name}</h6>
                                <p className="section__decscription text-center">{item.experience}</p>
                            </div>
                        </Col>
                    )
                })
            }
        </>
    )
}
export default OurMembers