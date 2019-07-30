import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

class ListItem extends React.Component {
  render(props) {
    return (
      <ListGroup.Item className='post'>
        <Row className='d-md-flex align-items-center'>
          <Col md='8'>
            <h3>{this.props.name}</h3>
            <h4>{this.props.games.join(', ')}</h4>
            <h4>{this.props.yearsExperience ? `${this.props.yearsExperience}+ years` : `Less than a year`} experience</h4>
          </Col>
          <Col md='2' className='text-center'>
            <h4>{this.props.pay.amount > 0 ? `$${this.props.pay.amount}/${this.props.pay.rate}` : 'FREE' }</h4>
          </Col>
          <Col md='2'>
            <h4>July, 2</h4>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }
}


export default ListItem;
