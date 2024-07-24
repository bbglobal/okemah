import { Hero } from '../../../components'
import heroImg from "../../Hero/img/hero-img.png"
import ellipse from "../../Hero/img/ellipse.svg"
import PodcastComponent from '../../PodcastComponent'
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import mic from "./img/mic.svg"
import volume from "./img/volume.svg";
import "./style.css"

const Episodes = () => {
    return (
        <main className='podcasts'>
            <Hero
                heroImg={heroImg}
                ellipse={ellipse}
            />

            <PodcastComponent />

            {/* <section className="pod-audios">
                <Container fluid>
                    <Row>
                        <Col sm={12} md={12} lg={4}>
                            <div className="pod-audio-wrapper">
                                <div className="pod-title-wrapper">
                                    <div className="mic-wrapper">
                                        <img src={mic} alt="icon" />
                                    </div>
                                    <div className="pod-audio-txt-wrapper">
                                        <h3 className='pod-audio-title'>Interview</h3>
                                        <small className='pod-audio-small'>For Job Holder</small>
                                    </div>
                                </div>
                                <div className="pod-play"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}

            <section className="voice-slider">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="image-parent">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <img src={mic} alt="img/mic.svg" className="d-block" />
                                <div className="audio-txt-wrapper">
                                    <h3>Interview</h3>
                                    <p>For Job Holder</p>
                                </div>
                            </div>
                            <div className="volume-parent">
                                <span className="span-text">25:00</span>
                                <img src={volume} alt="img/volume.svg" />
                                <button className="btn-pause">=</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-parent">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <img src={mic} alt="img/mic.svg" className="d-block" />
                                <div className="audio-txt-wrapper">
                                    <h3>Coversational</h3>
                                    <p>For Job Holder</p>
                                </div>
                            </div>
                            <div className="volume-parent">
                                <span className="span-text">25:00</span>
                                <img src={volume} alt="img/volume.svg" />
                                <button className="btn-pause">=</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-parent">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <img src={mic} alt="img/mic.svg" className="d-block" />
                                <div className="audio-txt-wrapper">
                                    <h3>Educational</h3>
                                    <p>Every Body Can Follow</p>
                                </div>
                            </div>
                            <div className="volume-parent">
                                <span className="span-text">25:00</span>
                                <img src={volume} alt="img/volume.svg" />
                                <button className="btn-pause">=</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-parent">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <img src={mic} alt="img/mic.svg" className="d-block" />
                                <div className="audio-txt-wrapper">
                                    <h3>Interview</h3>
                                    <p>For All Students</p>
                                </div>
                            </div>
                            <div className="volume-parent">
                                <span className="span-text">25:00</span>
                                <img src={volume} alt="img/volume.svg" />
                                <button className="btn-pause">=</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>


            <section className='podcast-categories'>
                <h2 className="cat-head-txt">
                    Listen Change Your Life
                </h2>

                <Container fluid>
                    <Row>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episod:01</small>
                                    <p className="pod-title">News and Politics</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episod:01</small>
                                    <p className="pod-title">News and Politics</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episod:01</small>
                                    <p className="pod-title">Business</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episod:01</small>
                                    <p className="pod-title">Technology</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episod:01</small>
                                    <p className="pod-title">Comedy</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episod:01</small>
                                    <p className="pod-title">True Crime</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Episodes