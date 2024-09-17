import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import {ProjectCard} from './ProjectCard';
import {CertificateCard} from './CertificateCard';
import projImg1 from '../assets/img/lms.jpeg';
import projImg2 from '../assets/img/books.jpeg';
import projImg3 from '../assets/img/cars1.jpg';
import projImg4 from '../assets/img/persona.jpeg';
import projImg5 from '../assets/img/burger.jpeg';
import projImg6 from '../assets/img/ads.jpeg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import Certi1 from '../assets/img/coursea.jpg';
import Certi2 from '../assets/img/learning1.jpg';
import Certi3 from '../assets/img/learning2.jpg';
import Certi4 from '../assets/img/learning3.jpg';
import Certi5 from '../assets/img/learning4.jpg';


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'LMS',
      description: 'Figma',
      imgUrl: projImg1,
      link: 'https://www.figma.com/community/file/1394983061886998774/lms-login',
    },
    {
      title: 'Book Store Website',
      description: 'UI /UX Design',
      imgUrl: projImg2,
      link: 'https://www.figma.com/community/file/1411610277598350365/online-book-store-website',
    },
    {
      title: 'Cars Rental App',
      description: 'Design',
      imgUrl: projImg3,
      link: 'https://www.figma.com/community/file/1400518691056965960/rent-car-of-you-dream-app',
    },
    {
      title: 'User Persona',
      description: ' ',
      imgUrl: projImg4,
      link: 'https://www.figma.com/community/file/1411609176019840026/user-persona',
    },
    {
      title: '3D Design Advertisement',
      description: ' ',
      imgUrl: projImg5,
      link: 'https://www.figma.com/community/file/1400521109345878348/3d-website',
    },
    {
      title: 'AI Makeup Advertisment',
      description: 'Flyer',
      imgUrl: projImg6,
      link: 'https://www.figma.com/community/file/1356658201153763837/ai-makeup-advertisment',
    },
  ];

  const certificate = [
    {
      title: 'Designing a Prototype',
      description: 'Coursea',
      imgUrl: Certi1,
      link: ' ',
    },
    {
      title: 'VLOOKUP in Excel',
      description: 'Great Learning',
      imgUrl: Certi2,
      link: 'https://www.mygreatlearning.com/certificate/IPWLHOWL',
    },
    {
      title: 'ChatGPT for Biginner',
      description: 'Great Learning',
      imgUrl: Certi3,
      link: 'https://www.mygreatlearning.com/certificate/QCBOBBXH',
    },
    {
      title: 'UI/UX Designer',
      description: 'Begninner',
      imgUrl: Certi4,
      link: 'https://www.mygreatlearning.com/certificate/SILDYRYX',
    },
    {
      title: 'AppDesigning',
      description: 'Begninner',
      imgUrl: Certi5,
      link: 'https://www.mygreatlearning.com/certificate/MDWXPZOA',
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({isVisible}) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects I've worked on, showcasing a variety of skills and technologies. Explore each one to see how I tackle different challenges and design solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">
                            adfadfdsf
                        </Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map ((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                      </Tab.Pane> */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {certificate.map ((certificate, index) => (
                            <CertificateCard key={index} {...certificate} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
