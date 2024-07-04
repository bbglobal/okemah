
import { NavLink } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const StoreGrid = ({ headerText }) => {
    return (
        <section className="store">
            <Container fluid>
                <Row>
                    <Col sm={`12`}>
                        <h2 className="podcast-head-txt">{headerText}</h2>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Pillow</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">T-Shirt Design</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Hand Bag & wallets</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Sublimation</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Decal & Stickers</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Tumbler</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Acrylic Keychain</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Box Basket</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">E-Book</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">T-Shirt Design</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Hat & Caps </p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`3`}>
                        <NavLink to={`#`}>
                            <div className="store-wrapper">
                                <p className="store-txt">KId/Baby</p>
                            </div>
                        </NavLink>
                    </Col>


                    <Col sm={`12`} md={`12`} lg={`12`}>
                        <div className="btn-wrapper">
                            <button className="btn-load-more">Load More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default StoreGrid