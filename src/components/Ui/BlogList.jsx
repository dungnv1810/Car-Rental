import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import blogData from "../../assets/data/blogData"

import "../../Styles/BlogList.css"
const BlogList = () => {
    return (
        <>
            {
                blogData.map((item, index) => {
                    return (
                        <BlogItem key={index} item={item} />
                    )
                })
            }
        </>
    )
}

const BlogItem = ({ item }) => {
    const {imgUrl, title, author, date, description, time} = item
    return (
        <>
            <Col lg='4' md='4' sm='6' className="mb-4"
                data-aos="fade-up"
                data-aos-duration="3000">
                <div className="blog__item">
                    <img src={imgUrl} alt='' className="w-100" />
                    <div className="blog__info p-3">
                        <Link to={`/blogs/${title}`} className="blog__title">{title}</Link>
                        <p className="section__description mt-2">
                            {
                                description.length > 100 ? description.substr(0, 100) : description
                            }
                        </p>
                        <Link to={`/blogs/${title}`} className="read__more">Read More</Link>
                        <div className="blog__time pt-3 mt-3 d-flex align-content-center justify-content-between">
                            <span className="author__name d-flex align-content-center gap-2">
                                <i class="ri-user-line"></i>{author}
                            </span>
                            <div className="d-flex align-content-center gap-3">
                                <span className="d-flex align-content-center gap-1 section__description">
                                    <i class="ri-calendar-line"></i>{date}
                                </span>
                                <span className="d-flex align-content-center gap-1 section__description">
                                    <i class="ri-time-line"></i>{time}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}
export default BlogList