import { Container, Row, Col } from 'react-bootstrap'
import aboutImg from "../Pages/Home/img/about-img.png"
import './style.css'

const ContactForm = () => {
    return (
        <>
            <section className="newsletter">
                <Container fluid>
                    <Row>
                        <Col sm={`12`}>
                            <h2 className="newsletter-head-txt">Subscribe Our Newsletter</h2>
                            <p className="newsletter-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam praesent duis elementum eu risus nec. </p>
                        </Col>

                        <Col sm={`12`}>
                            <form action="get">
                                <div className="newsletter-input">
                                    <input type="email" name="newsletter" id="newsletter" placeholder="Enter Your Email Adress" />
                                    <button className="btn-subscribe">Subscribe</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="get-in-touch">
                <Container fluid>
                    <Row>
                        <Col sm={`12`} md={`12`} lg={`6`}>
                            <img className="contact-img" src={aboutImg} alt="contact image" />
                        </Col>
                        <Col sm={`12`} md={`12`} lg={`6`}>
                            <h2 className="contact-head-txt">Get in Touch</h2>
                            <form action="get" id="get-in-touch">
                                <div className="get-in-touch-input mb-3">
                                    <input type="text" name="name" id="email" placeholder="Full Name" />
                                </div>
                                <div className="get-in-touch-input mb-3">
                                    <input type="email" name="email" id="email" placeholder="E-Mail" />
                                </div>
                                <div className="get-in-touch-input mb-3">
                                    <input type="number" name="contact" id="contact" placeholder="Phone Number" />
                                </div>
                                <div className="get-in-touch-input mb-3">
                                    <textarea name="message" id="message" placeholder="Message" rows="30"></textarea>
                                </div>

                                <button className="btn-send">Send</button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ContactForm