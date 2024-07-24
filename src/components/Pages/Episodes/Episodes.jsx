import { Hero } from '../../../components'
import heroImg from "../../Hero/img/hero-img.png"
import ellipse from "../../Hero/img/ellipse.svg"
import PodcastComponent from '../../PodcastComponent'
import { Container, Row, Col } from 'react-bootstrap'
import mic from "./img/mic.svg"
import duration from "./img/duration.svg"
import "./style.css"

const Episodes = () => {
    return (
        <main className='podcasts'>
            <Hero
                heroImg={heroImg}
                ellipse={ellipse}
            />

            <PodcastComponent />

            <section className="pod-audios">
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
                                    <small className="pod-title-small">Episode:01</small>
                                    <p className="pod-title">News and Politics</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episode:01</small>
                                    <p className="pod-title">News and Politics</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episode:01</small>
                                    <p className="pod-title">Business</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episode:01</small>
                                    <p className="pod-title">Technology</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episode:01</small>
                                    <p className="pod-title">Comedy</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <div className="pod-cat-wrapper">
                                <div className="pod-video"></div>

                                <div className="pod-title-wrapper">
                                    <small className="pod-title-small">Episode:01</small>
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