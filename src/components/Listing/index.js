import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListItem from './listItem';

import moment from 'moment';
import axios from 'axios';

class Listings extends React.Component {
  state = {
    listings: null,
    serverTime: null
  }

  componentDidMount() {
    axios.get('/api/listings')
    .then(response => {
      this.setState({ listings: response.data.reverse() });
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    })

    axios.get('/api/servertime')
    .then(response => {
      this.setState({serverTime: response.data});
    })
    .catch(error => {
      console.log(error);
    })

  }
  
  render() {
    return (
      <Row id='listings'>
        <Col md='12'>
        <div className='heading d-md-flex align-items-center'>
          <h1>Find a Game Master for Hire!</h1>
          <h2>{this.state.listings && this.state.serverTime ? 'Latest post ' + moment(this.state.listings[0].createdAt).from(this.state.serverTime) : null}</h2>
        </div>
        <ListGroup>
          {
          this.state.listings ? 
          this.state.listings.map(item => 
          <ListItem key={item._id} name={item.name} games={item.games} yearsExperience={item.yearsExperience} pay={item.pay}/>)
          : 
          <div className="d-md-flex align-items-center loading">
            <div className="spinner-border" role="status" aria-hidden="true"></div>
            <p>Please give us a little to get the latest listings...</p>
          </div>
          }
        </ListGroup>
        </Col>
      </Row>
    );
  }
}


export default Listings;
