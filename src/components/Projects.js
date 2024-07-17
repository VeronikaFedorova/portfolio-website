import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Freelance work',
      description: 'Design & Development',
      imgUrl: projImg1,
      projectUrl: 'https://veronikafedorova.github.io/parallax-scroll/',
    },
    {
      title: 'Samples of work',
      description: 'Design & Development',
      imgUrl: projImg2,
      projectUrl: 'https://veronikafedorova.github.io/Halloween-website/',
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
      projectUrl: 'https://veronikafedorova.github.io/ping-pong/',
    },
  ];

  return (
    <section className='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              sapiente laudantium? Sint cupiditate praesentium recusandae ut
              nulla est vero, quibusdam temporibus maxime numquam at animi?
              Eaque harum fugiat temporibus cupiditate.
            </p>
            <Tab.Container id='project-skills' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt=''/>
    </section>
  );
};
