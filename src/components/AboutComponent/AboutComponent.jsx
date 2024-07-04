import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const AboutComponent = ({aboutTxt, aboutImg, padding}) => {
    return (
        <section className={`about ${padding}`}>

            <Container fluid>
                <Row>

                    <Col sm={`12`} md={`12`} lg={`4`}>
                        <img src={aboutImg} alt="about image" className="about-img" />
                    </Col>

                    <Col sm={`12`} md={`12`} lg={`8`}>
                        <h2 className="about-head-txt">About Us</h2>
                        <p className="about-txt">
                            {aboutTxt}
                        </p>
                    </Col>

                </Row>
            </Container>

        </section>
    )
}

export default AboutComponent