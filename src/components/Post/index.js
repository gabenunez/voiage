import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';


class Post extends React.Component {
  state = {
    listings: null,
    serverTime: null
  }

  componentDidMount() {
    axios.get('/api/listings/' + this.props.match.params.postId)
    .then(response => {
      this.setState({ listings: response.data });
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  render() {
    console.log(this.props.match.params.postId)
    return (
      <Row>
      </Row>
    );
  }
}

export default Post;