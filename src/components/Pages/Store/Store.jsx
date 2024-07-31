import { Hero, StoreGrid } from '../../../components'
import banner from "./img/banner.png"
import bannerTwo from "./img/banner-two.png"
import bannerThree from "./img/banner-three.png"
import stars from "./img/stars.svg"
import tesImgBg from "./img/ellipse.svg"
import ellipse from "../../Hero/img/ellipse.svg"
import testimonialImg from "./img/testimonial-img.png"
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react'
import axios from "axios";
import './style.css'

const Store = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.post(
                    `https://1a1f85-96.myshopify.com/api/2023-07/graphql.json`,
                    {
                        query: `{
                        products(first: 10) {
                        edges {
                            node {
                            id
                            title
                            description
                            images(first: 1) {
                                edges {
                                node {
                                    src
                                    altText
                                }
                                }
                            }
                            }
                        }
                        }
                    }
                    `,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Shopify-Storefront-Access-Token': 'eca1209b7b28f7e4c0cbecf32c8da5d9',
                        },
                    }
                );
                setProducts(response.data.data.products.edges);
                console.log(response.data.data.products.edges);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);


    return (
        <main className='store-page'>
            <Hero
                heroImg={banner}
                ellipse={ellipse}
            />

            <StoreGrid
                headerText={`What's Trending Now?`}
            />

            <section className="category">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h2 className="category-head-txt">Shop By Category</h2>
                        </Col>
                        {products.map((product) => (
                            <Col sm={12} md={6} lg={3} key={product.node.id}>
                                <NavLink to={`#`}>
                                    <div className="category-box">
                                        {product.node.images.edges.length > 0 && (
                                            <img
                                                src={product.node.images.edges[0].node.src}
                                                alt={product.node.images.edges[0].node.altText || 'Product Image'}
                                            style={{width: "100%"}}/>
                                        )}
                                    </div>
                                    <p className="category-title">
                                        {product.node.title}
                                    </p>
                                </NavLink>
                            </Col>
                        ))}
                        {/* <Col sm={12} md={6} lg={3}>
                            <NavLink to={`#`}>
                                <div className="category-box"></div>
                                <p className="category-title">
                                    Hawaiian Shirt
                                </p>
                            </NavLink>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <NavLink to={`#`}>
                                <div className="category-box"></div>
                                <p className="category-title">
                                    Hand Bag & wallets
                                </p>
                            </NavLink>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <NavLink to={`#`}>
                                <div className="category-box"></div>
                                <p className="category-title">
                                    Sublimation
                                </p>
                            </NavLink>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <NavLink to={`#`}>
                                <div className="category-box"></div>
                                <p className="category-title">
                                    Decal & Stickers
                                </p>
                            </NavLink>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <NavLink to={`#`}>
                                <div className="category-box"></div>
                                <p className="category-title">
                                    Tumbler
                                </p>
                            </NavLink>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <NavLink to={`#`}>
                                <div className="category-box"></div>
                                <p className="category-title">
                                    Hat & Caps
                                </p>
                            </NavLink>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <NavLink to={`#`}>
                                <div className="category-box"></div>
                                <p className="category-title">
                                    KId/Baby
                                </p>
                            </NavLink>
                        </Col> */}
                    </Row>
                </Container>
            </section>

            <section className='new-arrivals'>
                <Container fluid>
                    <h2 className="new-arrivals-head-txt">Shop New Arrival</h2>
                    <div className="d-flex align-items-center gap-5">
                        <div className="side-banner">
                            <img className='add-banner' src={bannerTwo} alt="Add Desing Banner" />
                        </div>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <div className="arrival-box">
                                    <div className="price-tag">
                                        <h2 className="price-tag-txt">$24.99</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="arrival-box">
                                    <div className="price-tag">
                                        <h2 className="price-tag-txt">$24.99</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="arrival-box">
                                    <div className="price-tag">
                                        <h2 className="price-tag-txt">$24.99</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="arrival-box">
                                    <div className="price-tag">
                                        <h2 className="price-tag-txt">$24.99</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="arrival-box">
                                    <div className="price-tag">
                                        <h2 className="price-tag-txt">$24.99</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="arrival-box">
                                    <div className="price-tag">
                                        <h2 className="price-tag-txt">$24.99</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="arrival-box">
                                    <div className="price-tag">
                                        <h2 className="price-tag-txt">$24.99</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="arrival-box">
                                    <div className="price-tag">
                                        <h2 className="price-tag-txt">$24.99</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className="arrival-box">
                                    <div className="price-tag">
                                        <h2 className="price-tag-txt">$24.99</h2>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className="advertisement-banner-sec">
                <div className="advertisement-banner">
                    <img src={bannerThree} alt="add desing banner" />
                </div>
            </section>

            <section className='customer-reviews'>
                <h2 className="customers-review’s-head-txt">Customers Review’s</h2>

                <Swiper
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    navigation={true}
                    modules={[FreeMode, Navigation, Autoplay]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="testimonial-wrapper">
                            <div className="tes-img-wrapper">
                                <img src={tesImgBg} alt="ellipse" />
                                <img src={testimonialImg} className='tes-img' alt="testimonial image" />
                            </div>

                            <div className="btn-tes-wrapper">
                                <button className='btn-testimonial'>John David</button>
                            </div>

                            <div className="ratting-wrapper">
                                <img src={stars} alt="ratting start" /> <small className='ratting'>5.0</small>
                            </div>

                            <div className="review-wrapper">
                                <p className='review'>Lorem ipsum dolor sit amet consectetur. Duis senectus pellentesque non id nulla non aenean.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-wrapper">
                            <div className="tes-img-wrapper">
                                <img src={tesImgBg} alt="ellipse" />
                                <img src={testimonialImg} className='tes-img' alt="testimonial image" />
                            </div>

                            <div className="btn-tes-wrapper">
                                <button className='btn-testimonial'>John David</button>
                            </div>

                            <div className="ratting-wrapper">
                                <img src={stars} alt="ratting start" /> <small className='ratting'>5.0</small>
                            </div>

                            <div className="review-wrapper">
                                <p className='review'>Lorem ipsum dolor sit amet consectetur. Duis senectus pellentesque non id nulla non aenean.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-wrapper">
                            <div className="tes-img-wrapper">
                                <img src={tesImgBg} alt="ellipse" />
                                <img src={testimonialImg} className='tes-img' alt="testimonial image" />
                            </div>

                            <div className="btn-tes-wrapper">
                                <button className='btn-testimonial'>John David</button>
                            </div>

                            <div className="ratting-wrapper">
                                <img src={stars} alt="ratting start" /> <small className='ratting'>5.0</small>
                            </div>

                            <div className="review-wrapper">
                                <p className='review'>Lorem ipsum dolor sit amet consectetur. Duis senectus pellentesque non id nulla non aenean.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-wrapper">
                            <div className="tes-img-wrapper">
                                <img src={tesImgBg} alt="ellipse" />
                                <img src={testimonialImg} className='tes-img' alt="testimonial image" />
                            </div>

                            <div className="btn-tes-wrapper">
                                <button className='btn-testimonial'>John David</button>
                            </div>

                            <div className="ratting-wrapper">
                                <img src={stars} alt="ratting start" /> <small className='ratting'>5.0</small>
                            </div>

                            <div className="review-wrapper">
                                <p className='review'>Lorem ipsum dolor sit amet consectetur. Duis senectus pellentesque non id nulla non aenean.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-wrapper">
                            <div className="tes-img-wrapper">
                                <img src={tesImgBg} alt="ellipse" />
                                <img src={testimonialImg} className='tes-img' alt="testimonial image" />
                            </div>

                            <div className="btn-tes-wrapper">
                                <button className='btn-testimonial'>John David</button>
                            </div>

                            <div className="ratting-wrapper">
                                <img src={stars} alt="ratting start" /> <small className='ratting'>5.0</small>
                            </div>

                            <div className="review-wrapper">
                                <p className='review'>Lorem ipsum dolor sit amet consectetur. Duis senectus pellentesque non id nulla non aenean.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </main>
    )
}

export default Store