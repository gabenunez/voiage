import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

class ListItem extends React.Component {
  render() {
    return (
      <Link to={`/gm/${this.props.id}`}>
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
              <h4>{this.props.index === 0 ?  'Latest': this.props.date_created}</h4>
            </Col>
          </Row>
        </ListGroup.Item>
      </Link>
    );
  }
}


export default ListItem;
