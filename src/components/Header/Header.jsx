import React, {useRef} from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../Styles/Header.css"
const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/cars',
        display: 'Cars'
    },
    {
        path: '/blogs',
        display: 'Blogs'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
]
const Header = () => {
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle('nav__active')
    return (
        <>
            <header className="header">
                <div className="header__top">
                    <Container>
                        <Row>
                            <Col lg='6' md='6' sm='6'>
                                <div className="header__top__left">
                                    <span data-aos="zoom-in" data-aos-duration="1000">Need Help?</span>
                                    <span className="header__top__help" data-aos="zoom-in" data-aos-duration="1000">
                                        <i class="ri-phone-fill"></i> 0345 630 366
                                    </span>
                                </div>
                            </Col>
                            <Col lg='6' md='6' sm='6'>
                                <div className="header__top__right">
                                    <Link to="#" className="d-flex align-items-center justify-content-center gap-1"
                                        div data-aos="fade-left" data-aos-duration="1000"
                                    >
                                        <i class="ri-login-circle-line"></i> Login
                                    </Link>
                                    <Link to="#" className="d-flex align-items-center justify-content-center gap-1"
                                        div data-aos="fade-left" data-aos-duration="2000"
                                    >
                                        <i class="ri-user-line"></i> Register
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* ===== header midder ===== */}
                <div className="header__middle">
                    <Container>
                        <Row>
                            <Col lg='4' md='3' sm='4'>
                                <div className="logo" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>
                                        <Link to="/home" className="d-flex align-items-center gap-3">
                                            <i class="ri-car-line"></i>
                                            <span>Rent Car <br/> Service</span>
                                        </Link>
                                    </h1>
                                </div>
                            </Col>
                            <Col lg='3' md='3' sm='4'>
                                <div className="header__location d-flex align-items-center gap-3"
                                data-aos="fade-up" data-aos-duration="2000">
                                    <span><i class="ri-earth-line"></i></span>
                                    <div className="header__location__content">
                                        <h4>Bangladesh</h4>
                                        <h6>Sylhet City, Bangladesh</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='3' md='3' sm='4'>
                                <div className="header__location d-flex align-items-center gap-3"
                                data-aos="fade-up" data-aos-duration="2000">
                                    <span><i class="ri-time-line"></i></span>
                                    <div className="header__location__content">
                                        <h4>Sunday to Friday</h4>
                                        <h6>10am - 7pm</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='2' md='3' sm='0' className="d-flex align-items-center justify-content-end">
                                <button className="btn header__btn"
                                data-aos="fade-up" data-aos-duration="2000">
                                    <Link to='/contact'>
                                        <i class="ri-phone-line"></i>
                                        Request a Call
                                    </Link>
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
                {/* ===== main navigation ===== */}
                <div className="main__navbar">
                    <Container>
                        <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i class="ri-menu-line"></i>
                            </span>
                            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                                <div className="menu">
                                    {
                                        navLinks.map((item, index) => {
                                            return (
                                                <NavLink className={navClass => navClass.isActive ? 'nav__item nav__action' : 'nav__item'} key={index} to={item.path}>{item.display}</NavLink>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="nav_right">
                                <div className="search__box">
                                    <input type='text' placeholder="Search"/>
                                    <i class="ri-search-line"></i>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        </>
    )
}
export default Header