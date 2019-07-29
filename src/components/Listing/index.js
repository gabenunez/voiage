import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

class Listings extends React.Component {
  render() {
    return (
      <Row id='listings'>
        <Col md='12'>
        <div className='heading d-md-flex align-items-center'>
          <h1>Find a Game Master for Hire!</h1>
          <h2>Latest post about # hours ago</h2>
        </div>
        <ListGroup>
          <ListGroup.Item className='post'>
            <Row className='d-md-flex align-items-center'>
              <Col md='8'>
                <h3>Gabe Nuñez</h3>
                <h4>Dungeons & Dragons</h4>
                <h4>3+ Years Experience</h4>
              </Col>
              <Col md='2'>
                <h4>$15/game</h4>
              </Col>
              <Col md='2'>
                <h4>July, 2</h4>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
    );
  }
}


export default Listings;
