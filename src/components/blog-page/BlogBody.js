import React, { Component } from 'react';
import axios from 'axios';

import SingleBlogPost from './SingleBlogPost';
class BlogBody extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get('http://localhost:3000/posts')
      .then(response => this.setState({ posts: response.data }));
  }
  render() {
    return (
      <div className="section-padding">
        <div className="container">
          <div className="row">
            {this.state.posts.map(post => {
              return (
                <div class="col-md-6">
                  <SingleBlogPost {...post} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogBody;
