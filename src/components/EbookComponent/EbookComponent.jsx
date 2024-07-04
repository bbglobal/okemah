import { NavLink } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const EbookComponent = () => {
    return (
        <section className="e-books">
            <Container fluid>
                <Row>
                    <Col sm={`12`} md={`12`} lg={`12`}>
                        <h2 className="books-head-txt">E-BOOKS</h2>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`4`}>
                        <NavLink to={`#`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Art and Music Scene</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`4`}>
                        <NavLink to={`#`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Educational Pioneers</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`4`}>
                        <NavLink to={`#`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Religious Heritage</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`4`}>
                        <NavLink to={`#`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Literary Contributions</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`4`}>
                        <NavLink to={`#`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Fashion and Style</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`4`}>
                        <NavLink to={`#`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Environmental Stewardship</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`12`}>
                        <NavLink to={`#`}>
                            <div className="btn-wrapper">
                                <button className="btn-load-more">Load More</button>
                            </div>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EbookComponent