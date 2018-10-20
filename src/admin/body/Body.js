import React, { Component } from 'react';
import BodyHeader from './BodyHeader';
import Post from './post/Post';
class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <BodyHeader pageTitle="Blog Post" pageName="post" />

        <Post />
      </React.Fragment>
    );
  }
}

export default Body;
