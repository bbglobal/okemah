import heroImg from "../../Hero/img/hero-img.png"
import ellipse from "../../Hero/img/ellipse.svg"
import aboutImg from "./img/about-img.png"
import blogOne from "./img/blog-one.png"
import blogTwo from "./img/blog-two.png"
import blogThree from "./img/blog-three.png"
import { Hero } from '../../../components'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const Home = () => {
    return (
        <main>
            <Hero
                heroImg={heroImg}
                ellipse={ellipse}
            />

            <section className="about">

                <Container fluid>
                    <Row>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <img src={aboutImg} alt="about image" className="about-img" />
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`8`}>
                            <h2 className="about-head-txt">About Us</h2>
                            <p className="about-txt">Arizona History, the Okemah Community – a reflection on years past, which records the history and rich culture of an African-American community in South East Phoenix. This record is designed to amplify the historical understanding of life in this small community. Okemah was a fascinating community in which to live and grow. It was indeed a unique community where honest, hard-working men were proud to be their brother’s keeper. Women were respected and demonstrated a sense of pride in the care of their homes and children. Children were loved and nurtured by family, and the community willingly served as their extended family. The community valued respect for self and others and held in high esteem the desire for academic pursuit. These values, taught at an early age, were the essence of its vision of a better brighter future for its youth. We retained many values from preserving Okemah’s history. As we read about those who lived there, we share some of their experiences and learn from their mistakes as we look to the future. Knowledge of a productive history helps us to understand where we have been, value where we are, and recognize the need to continue to grow. A profound debt of gratitude is acknowledged here to all who have aided in the preparation of this brief, yet important chapter of Arizona history.
                            </p>
                        </Col>

                    </Row>
                </Container>

            </section>

            <section className="blog-news">
                <Container fluid>
                    <Row>
                        <Col sm={`12`} md={`12`} lg={`12`}>
                            <h2 className="blog-head-txt">BLog &amp; News</h2>
                            <p className="light">Discover the Latest News, Events, <br /> and Community Highlights</p>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-img-wrapper">
                                <img src={blogOne} alt="blog image" className="blog-img" />
                            </div>
                            <br />
                            <small className="light blog-small">Jun 1, 2024</small>
                            <h3 className="blog-title">Discovering Okemah’s Roots</h3>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-img-wrapper">
                                <img src={blogTwo} alt="blog image" className="blog-img" />
                            </div>
                            <br />
                            <small className="light blog-small">Jun 1, 2024</small>
                            <h3 className="blog-title">Okemah’s Future</h3>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-img-wrapper">
                                <img src={blogThree} alt="blog image" className="blog-img" />
                            </div>
                            <br />
                            <small className="light blog-small">Jun 1, 2024</small>
                            <h3 className="blog-title">Spotlight on Community Heroes</h3>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-img-wrapper">
                                <img src={blogOne} alt="blog image" className="blog-img" />
                            </div>
                            <br />
                            <small className="light blog-small">Jun 1, 2024</small>
                            <h3 className="blog-title">Discovering Okemah’s Roots</h3>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-img-wrapper">
                                <img src={blogTwo} alt="blog image" className="blog-img" />
                            </div>
                            <br />
                            <small className="light blog-small">Jun 1, 2024</small>
                            <h3 className="blog-title">Okemah’s Future</h3>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="blog-img-wrapper">
                                <img src={blogThree} alt="blog image" className="blog-img" />
                            </div>
                            <br />
                            <small className="light blog-small">Jun 1, 2024</small>
                            <h3 className="blog-title">Spotlight on Community Heroes</h3>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="e-books">
                <Container fluid>
                    <Row>
                        <Col sm={`12`} md={`12`} lg={`12`}>
                            <h2 className="books-head-txt">E-BOOKS</h2>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Art and Music Scene</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Educational Pioneers</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Religious Heritage</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Literary Contributions</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Fashion and Style</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`4`}>
                            <div className="e-book-wrapper">
                                <p className="e-book-txt">Environmental Stewardship</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`12`}>
                            <div className="btn-wrapper">
                                <button className="btn-load-more">Load More</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="podcast">
                <Container fluid>
                    <Row>
                        <Col sm={`12`}>
                            <h2 className="podcast-head-txt">PodCast Episodes</h2>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="store">
                <Container fluid>
                    <Row>
                        <Col sm={`12`}>
                            <h2 className="podcast-head-txt">Okemah’s Store</h2>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Pillow</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">T-Shirt Design</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Hand Bag & wallets</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Sublimation</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Decal & Stickers</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Tumbler</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Acrylic Keychain</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Box Basket</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">E-Book</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">T-Shirt Design</p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">Hat & Caps </p>
                            </div>
                        </Col>

                        <Col sm={`12`} md={`12`} lg={`3`}>
                            <div className="store-wrapper">
                                <p className="store-txt">KId/Baby</p>
                            </div>
                        </Col>


                        <Col sm={`12`} md={`12`} lg={`12`}>
                            <div className="btn-wrapper">
                                <button className="btn-load-more">Load More</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="newsletter">
                <Container fluid>
                    <Row>
                        <Col sm={`12`}>
                            <h2 className="newsletter-head-txt">Subscribe Our Newsletter</h2>
                            <p className="newsletter-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam praesent duis elementum eu risus nec. </p>
                        </Col>

                        <Col sm={`12`}>
                            <form action="get">
                                <div className="newsletter-input">
                                    <input type="email" name="newsletter" id="newsletter" placeholder="Enter Your Email Adress"/>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Home