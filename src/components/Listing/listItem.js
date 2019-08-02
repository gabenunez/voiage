import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import defaultAvatar from '../../images/default-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faGlobeAmericas, faCoins } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

class ListItem extends React.Component {
  render() {
    return (
      <Link to={`/dm/${this.props.id}`}>
        <ListGroup.Item className='post'>
          <Row className='d-md-flex align-items-center'>
            <Col md='2' className='image-container'>
              <img src={defaultAvatar} alt='Default Avatar' className='img-fluid' />
            </Col>
            <Col md='4'>
              <h3>{this.props.name} <span>DM since {this.props.yearStartedPlaying}</span> </h3>
              <h4>
                <span>
                  <FontAwesomeIcon icon={faCoins} />
                  {this.props.pay.amount > 0 ? `$${this.props.pay.amount}/${this.props.pay.rate}` : 'Free!'}
                </span>
              </h4>
              <h4>
                <span><FontAwesomeIcon icon={faClock} />
                  {this.props.timezone}
                </span>
              </h4>
              <h4>
                <span>
                  <FontAwesomeIcon icon={faGlobeAmericas} />
                  {this.props.availableOnline ? 'Online' : null} 
                  {this.props.availableOnline && this.props.availableInPerson  ? ' & ' : null}
                  {this.props.availableOnline && this.props.location  ? ' In-Person' : null}
                </span>

                {this.props.location ?
                  <span>
                    <FontAwesomeIcon icon={faMapPin} />
                    {this.props.location}
                  </span>
                : null}
              </h4>
            </Col>
            <Col md='4'>
              {
                this.props.interests.length > 0 ? 
                <ul>
                  {this.props.interests.map((interest => <li>{interest}</li> ))}
                </ul> 
              : null
              }
            </Col>
            <Col md='2' className='text-center'>
              <h4>{this.props.index === 0 ?  'Latest': this.props.date_created}</h4>
            </Col>
          </Row>
        </ListGroup.Item>
      </Link>
    );
  }
}


export default ListItem;
