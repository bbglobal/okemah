import { Container, Row, Col } from "react-bootstrap"
import Logo from "./img/footer-logo.jpg"
import './style.css'
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>

          <Col sm={12} md={12} lg={3}>
            <img className="footer-logo" src={Logo} alt="footer logo" />
          </Col>

          <Col sm={12} md={12} lg={3}>
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
              <NavLink to={`/podcasts-episodes`}>Podcast Episods</NavLink>
            </div>

            <div className="footer-link">
              <NavLink to={`/blog-&-news`}>Blog & News</NavLink>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer