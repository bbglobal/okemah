
import podcast from "../Pages/Home/img/podcast-photo.png"
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./style.css"

const PodcastComponent = () => {
    return (
        <section className="podcast">
            <Container fluid>
                <Row>
                    <Col sm={`12`}>
                        <h2 className="podcast-head-txt">PodCast Episodes</h2>
                    </Col>

                    <Col sm={`12`}>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <div className="podcast-img-wrapper">
                                    <img src={podcast} alt="podacast image" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="podcast-img-wrapper">
                                    <img src={podcast} alt="podacast image" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PodcastComponent