import {Container, Row, Col} from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import email from '../assets/img/email-icon.svg';
import phone from '../assets/img/phone-icon.svg';
import address from '../assets/img/address-icon.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({isVisible}) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({isVisible}) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>
                  <div size={12} sm={6} className="icon-text-wrapper">
                    <a className="icons" href="">
                      <img src={email} alt="Icon" />
                    </a>
                    <h4>samaviaiman777@gmail.com</h4>
                  </div>
                  <div size={12} sm={6} className="icon-text-wrapper">
                    <a className="icons" href="">
                      <img src={address} alt="Icon" />
                    </a>
                    <h4>Gulberg, Lahore</h4>
                  </div>
                  <div size={12} sm={6} className="icon-text-wrapper">
                    <a className="icons" href="">
                      <img src={phone} alt="Icon" />
                    </a>
                    <h4>+92 308 7572293</h4>
                  </div>
                  <Col size={12} className="px-1">
                    <a
                      href="https://www.linkedin.com/in/samavia-iman-02a4971bb/"
                      className="button-link"
                      style={{textDecoration: 'none'}}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Connect With Me</span>
                    </a>
                  </Col>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
