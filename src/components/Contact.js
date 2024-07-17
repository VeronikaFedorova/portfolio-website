import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import emailjs from 'emailjs-com';
export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({status: true, message:''});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setButtonText('Sending...');
    emailjs.init({
      publicKey: 'PkTnaDSziFnpS59vS',
    });
    const templateParams = {
      from_name: formDetails.firstName + ' ' + formDetails.lastName,
      to_name: 'Veronika', 
      message: formDetails.message,
      email: formDetails.email,
      phone: formDetails.phone,
    };

    emailjs
      .send('service_6ifbh6j', 'template_eu59i3r', templateParams)
      .then((response) => {
        setButtonText('Send');
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Message sent successfully!' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setButtonText('Send');
        setStatus({
          success: false,
          message: 'Something went wrong, please try again later.',
        });
      });
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.firstName}
                    placeholder='First Name'
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.lastName}
                    placeholder='Last Name'
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    value={formDetails.email}
                    placeholder='Email Address'
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='tel'
                    value={formDetails.phone}
                    placeholder='Phone'
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col sm={12} className='message'>
                  <textarea
                    cols='10'
                    rows='6'
                    value={formDetails.message}
                    placeholder='Message'
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <button type='submit'>
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? 'danger' : 'success'
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
