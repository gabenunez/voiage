import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Post({match}) {
  console.log(match.params.postId)
  return (
    <Row>
    </Row>
  );
}

export default Post;