import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import SingleBlogPost from './SingleBlogPost';
class BlogBody extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get(`http://localhost:3000/${this.props.navigator}`)
      .then(response => this.setState({ posts: response.data }));

    console.log(this.props.navigator);
  }
  render() {
    return (
      <div className="section-padding">
        <div className="container">
          <div className="row">
            {this.state.posts.map((post, index) => {
              return (
                <div
                  className={classnames({
                    'col-md-6': index > 0,
                    'col-md-12': index < 1
                  })}
                  key={post.id}
                >
                  <SingleBlogPost {...post} heroImage={index < 1} />
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
