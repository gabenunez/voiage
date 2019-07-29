import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col md='12' className='text-center'>
            <p>Made by Gabe Nuñez</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;