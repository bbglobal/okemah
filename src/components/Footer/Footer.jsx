import { Container, Row, Col } from "react-bootstrap"
import Logo from "./img/footer-logo.jpg"
import fb from "./img/fb.svg";
import insta from "./img/insta.svg";
import twitter from "./img/twitter.svg";
import call from "./img/call.svg";
import location from "./img/location.svg";
import message from "./img/message.svg";
import { NavLink } from "react-router-dom"
import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>

          <Col sm={12} md={12} lg={3} className="p-5">
            <img className="footer-logo" src={Logo} alt="footer logo" />
          </Col>

          <Col sm={12} md={12} lg={3} className="p-5">
            <h4>Our Pages</h4>

            <div className="footer-link">
              <NavLink to={`/`}>Home</NavLink>
            </div>

            <div className="footer-link">
              <NavLink to={`/about-us`}>About Us</NavLink>
            </div>

            <div className="footer-link">
              <NavLink to={`/e-books`}>E-Books</NavLink>
            </div>

            <div className="footer-link">
              <NavLink to={`/podcasts-episodes`}>Podcast Episodes</NavLink>
            </div>

            <div className="footer-link">
              <NavLink to={`/blog-&-news`}>Blog & News</NavLink>
            </div>
          </Col>

          

          <Col sm={12} md={12} lg={3} className="p-5">
            <h4>Social Links</h4>

            <div className="footer-link d-flex align-items-center gap-2">
              <div>
                <img src={fb} alt="facebook" />
              </div>
              <div>
                <a href="#" target="_blank">Facebook</a>
              </div>
            </div>

            <div className="footer-link d-flex align-items-center gap-2">
              <div>
                <img src={insta} alt="facebook" />
              </div>
              <div>
                <a href="#" target="_blank">Instagram</a>
              </div>
            </div>

            <div className="footer-link d-flex align-items-center gap-2">
              <div>
                <img src={twitter} alt="facebook" />
              </div>
              <div>
                <a href="#" target="_blank">Twitter</a>
              </div>
            </div>

          </Col>

          <Col sm={12} md={12} lg={3} className="p-5">
            <h4>Contact Us</h4>

            <div className="footer-link d-flex align-items-center gap-2">
              <div>
                <img src={location} alt="location icon" />
              </div>
              <div>
                <a href="#" target="_blank">Location</a>
              </div>
            </div>

            <div className="footer-link d-flex align-items-center gap-2">
              <div>
                <img src={message} alt="message icon" />
              </div>
              <div>
                <a href="mailto:#" target="_blank">Email</a>
              </div>
            </div>

            <div className="footer-link d-flex align-items-center gap-2">
              <div>
                <img src={call} alt="Call" />
              </div>
              <div>
                <a href="tel:#" target="_blank">Contact Us</a>
              </div>
            </div>

          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer