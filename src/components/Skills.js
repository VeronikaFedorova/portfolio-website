import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className='skills' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis quo non magnam et corporis corrupti ipsa perferendis
                iste dolores tenetur! Ipsam culpa doloremque praesentium vero
                pariatur, veritatis laudantium officia ea?
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  <img src={meter1} alt='' />
                  <h5>HTML</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='' />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='' />
                  <h5>JS</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='' />
                  <h5>Node.js</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='' />
                  <h5>MongoDB</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='' />
                  <h5>Agile</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className='background-image-left' alt='' />
    </section>
  );
};
