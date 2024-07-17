import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className='footer justify-items-center'>
      <Container>
        <Row className='align-items-center justify-items-center'>
          <Col sm={6}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/veronika-fedorova-1b450a210/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={navIcon1} alt='' />
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=100008079379287'
                target='_blank'
                rel='noreferrer'
              >
                <img src={navIcon2} alt='' />
              </a>
              <a
                href='https://www.instagram.com/fedorova_vrnk/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={navIcon3} alt='' />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
