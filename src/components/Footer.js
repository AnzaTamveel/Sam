import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon py-5">
              <a href="https://www.linkedin.com/in/samavia-iman-02a4971bb"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/samavia-iman-02a4971bb"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/samavia-iman-02a4971bb"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
