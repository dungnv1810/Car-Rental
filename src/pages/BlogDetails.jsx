import React, {useEffect} from "react";
import Helmet from "../components/Helmet/Helmet"
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { Link, useParams } from "react-router-dom";

import CommonSection from "../components/Ui/CommonSection" 
    
import commentImg from "../assets/all-images/ava-1.jpg"
import blogData from "../assets/data/blogData"

import "../Styles/BlogDetails.css"
const BlogDetails = () => {
    const {slug} = useParams()
    const blog = blogData.find(item => item.title === slug)
    useEffect(() => {
        window.scrollTo(0,0)
    },[blog])
    return (
        <>
            <Helmet title={blog.title}>
                <CommonSection title={blog.title} />
                <section>
                    <Container>
                        <Row>
                            <Col lg='8' md='8'>
                                <div className="blog__details">
                                    <img src={blog.imgUrl} alt='' className="w-100" />
                                    <h2 className="section__title mt-4">
                                        {blog.title}
                                    </h2>
                                    <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                                        <span className="author__name d-flex align-content-center gap-2">
                                            <i class="ri-user-line"></i>{blog.author}
                                        </span>
                                        <div className="d-flex align-content-center gap-3">
                                            <span className="d-flex align-content-center gap-1 section__description">
                                                <i class="ri-calendar-line"></i>{blog.date}
                                            </span>
                                            <span className="d-flex align-content-center gap-1 section__description">
                                                <i class="ri-time-line"></i>{blog.time}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="section__description">
                                        {blog.description}
                                    </p>
                                    <h6 className="ps-0 fw-normal">
                                        <blockquote className="fs-4">{blog.quote}</blockquote>
                                    </h6>
                                    <p className="section__description">
                                        {blog.description}
                                    </p>
                                    <div className="comment__list mt-5">
                                        <h4 className="mb-4">3 Comments</h4>
                                        <div className="single__comment d-flex gap-3">
                                            <img src={commentImg} alt=''/>
                                            <div className="comment__content">
                                                <h6 className="fw-bold">David Visa</h6>
                                                <p className="section__description mb-0">14 July, 2022</p>
                                                <p className="section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinction, itaque reiciendis ad cupiditate harum es quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporribus?</p>
                                                <span className="replay d-flex align-items-center gap-1">
                                                    <i class="ri-reply-line"></i> Replay
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ===== ===== */}
                                    <div className="leave__comment-from mt-5">
                                        <h4>Leave a Comment</h4>
                                        <p className="section__description">
                                            You must sign-in to make or comment a post
                                        </p>
                                        <Form>
                                            <FormGroup className="gap-3 d-flex">
                                                <Input type='text' placeholder="Full name"/>
                                                <Input type='email' placeholder="Email"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <textarea rows={5} placeholder='Comment...' className="w-100 py-2 px-3"/>
                                            </FormGroup>
                                            <button className="btn mt-3 comment__btn">Post a Comment</button>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='4'>
                                <div className="recent__post mb-4">
                                    <h5 className="fw-bold">Recent Posts</h5>
                                </div>
                                    {
                                        blogData.map((item, index) => {
                                            return (
                                                <div key={index} className="recent__blog__post">
                                                    <div className="d-flex gap-3">
                                                        <img src={item.imgUrl} alt=''/>
                                                        <h6>
                                                            <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}
export default BlogDetails;