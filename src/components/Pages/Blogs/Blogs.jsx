import { Container, Row, Col, NavLink } from "react-bootstrap";
import "./style.css";

const Blogs = () => {
  return (
    <main className="blogs">
      <section className="blogs-news">
        <Container fluid>
          <Row>
            <Col sm={`12`} md={`12`} lg={`6`}>
              <NavLink to={`#`}>
                <div className="hero-wrapper"></div>
              </NavLink>
            </Col>

            <Col sm={`12`} md={`12`} lg={`6`}>
              <NavLink to={`#`}>
                <div className="second-hero"></div>
              </NavLink>
              <NavLink to={`#`}>
                <div className="second-hero"></div>
              </NavLink>
            </Col>

            <Col sm={`12`} md={`12`} lg={`6`}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <button className="btn-business">Bussine</button>
                <small className="business-small">Jun 1, 2024</small>
              </div>
              <p className="business-txt">
                Discover the Latest News, Events, and Community Highlights
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="latest-news">
        <h2 className="latest-head-txt">Latest News</h2>
        <Row>
          <Col sm={`12`} md={`12`} lg={`4`}>
            <NavLink to={`#`}>
              <div className="latest-wrapper"></div>
              <p className="latest-paragraph">
                Lorem ipsum dolor sit amet consectetur. Felis scelerisque neque
                lorem orci quis sodales amet. Vel fusce lorem bibendum et id
                pellentesque mauris. Faucibus purus in facilisi diam nisl dolor
                et ornare. Purus lectus mi vitae consequat ante nulla ac blandit
                tortor.Lorem ipsum dolor sit amet consectetur. Felis scelerisque
                neque lorem orci quis sodales amet. Vel fusce lorem bibendum et
                id pellentesque mauris. Faucibus purus in facilisi diam nisl
                dolor et ornare. Purus lectus mi vitae consequat ante nulla ac
                blandit tortor.
              </p>
            </NavLink>
          </Col>

          <Col sm={`12`} md={`12`} lg={`8`}>
            <div className="d-flex align-items-center gap-3">
              <div className="latest-box">
                <NavLink to={`#`}>
                  <div className="latest-second-wrapper"></div>
                </NavLink>
                <NavLink to={`#`}>
                  <div className="latest-second-wrapper"></div>
                </NavLink>
              </div>

              <div className="latest-box">
                <NavLink to={`#`}>
                  <div className="latest-second-wrapper"></div>
                </NavLink>
                <NavLink to={`#`}>
                  <div className="latest-second-wrapper"></div>
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Blogs;
