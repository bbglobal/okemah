import heroImg from "../../Hero/img/hero-img.png"
import ellipse from "../../Hero/img/ellipse.svg"
import aboutImg from "./img/about-img.png"
import blogOne from "./img/blog-one.png"
import blogTwo from "./img/blog-two.png"
import blogThree from "./img/blog-three.png"
import { AboutComponent, EbookComponent, Hero, StoreGrid, PodcastComponent, ContactForm } from '../../../components'
import { NavLink } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'

import './style.css'

const Home = () => {
    return (
        <main>
            <Hero
                heroImg={heroImg}
                ellipse={ellipse}
            />

            <AboutComponent
                aboutImg={aboutImg}
                aboutTxt={`Arizona History, the Okemah Community – a reflection on years past, which records the history and rich culture of an African-American community in South East Phoenix. This record is designed to amplify the historical understanding of life in this small community. Okemah was a fascinating community in which to live and grow. It was indeed a unique community where honest, hard-working men were proud to be their brother’s keeper. Women were respected and demonstrated a sense of pride in the care of their homes and children. Children were loved and nurtured by family, and the community willingly served as their extended family. The community valued respect for self and others and held in high esteem the desire for academic pursuit. These values, taught at an early age, were the essence of its vision of a better brighter future for its youth. We retained many values from preserving Okemah’s history. As we read about those who lived there, we share some of their experiences and learn from their mistakes as we look to the future. Knowledge of a productive history helps us to understand where we have been, value where we are, and recognize the need to continue to grow. A profound debt of gratitude is acknowledged here to all who have aided in the preparation of this brief, yet important chapter of Arizona history.`}
            />

            <section className="blog-news">
                <Container fluid>
                    <Row>
                        <Col sm={`12`} md={`12`} lg={`12`}>
                            <h2 className="blog-head-txt">BLog &amp; News</h2>
                            <p className="light">Discover the Latest News, Events, <br /> and Community Highlights</p>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-wrapper">
                                <div className="blog-img-wrapper">
                                    <NavLink to={`#`}>
                                        <img src={blogOne} alt="blog image" className="blog-img" />
                                    </NavLink>
                                </div>
                                <br />
                                <NavLink to={`#`}>
                                    <small className="light blog-small">Jun 1, 2024</small>
                                    <h3 className="blog-title">Discovering Okemah’s Roots</h3>
                                </NavLink>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-wrapper">
                                <div className="blog-img-wrapper">
                                    <NavLink to={`#`}>
                                        <img src={blogTwo} alt="blog image" className="blog-img" />
                                    </NavLink>
                                </div>
                                <br />
                                <NavLink to={`#`}>
                                    <small className="light blog-small">Jun 1, 2024</small>
                                    <h3 className="blog-title">Okemah’s Future</h3>
                                </NavLink>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-wrapper">
                                <div className="blog-img-wrapper">
                                    <NavLink to={`#`}>
                                        <img src={blogThree} alt="blog image" className="blog-img" />
                                    </NavLink>
                                </div>
                                <br />
                                <NavLink to={`#`}>
                                    <small className="light blog-small">Jun 1, 2024</small>
                                    <h3 className="blog-title">Spotlight on Community <br /> Heroes</h3>
                                </NavLink>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-wrapper">
                                <div className="blog-img-wrapper">
                                    <NavLink to={`#`}>
                                        <img src={blogOne} alt="blog image" className="blog-img" />
                                    </NavLink>
                                </div>
                                <br />
                                <NavLink to={`#`}>
                                    <small className="light blog-small">Jun 1, 2024</small>
                                    <h3 className="blog-title">Discovering Okemah’s Roots</h3>
                                </NavLink>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-wrapper">
                                <div className="blog-img-wrapper">
                                    <NavLink to={`#`}>
                                        <img src={blogTwo} alt="blog image" className="blog-img" />
                                    </NavLink>
                                </div>
                                <br />
                                <NavLink to={`#`}>
                                    <small className="light blog-small">Jun 1, 2024</small>
                                    <h3 className="blog-title">Okemah’s Future</h3>
                                </NavLink>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-wrapper">
                                <div className="blog-img-wrapper">
                                    <NavLink to={`#`}>
                                        <img src={blogThree} alt="blog image" className="blog-img" />
                                    </NavLink>
                                </div>
                                <br />
                                <NavLink to={`#`}>
                                    <small className="light blog-small">Jun 1, 2024</small>
                                    <h3 className="blog-title">Spotlight on Community <br /> Heroes</h3>
                                </NavLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <EbookComponent />

            <PodcastComponent />

            <StoreGrid
                headerText={`Okemah’s Store`}
            />

            <ContactForm />

        </main>
    )
}

export default Home