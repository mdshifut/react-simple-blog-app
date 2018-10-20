import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import SingleBlogPost from './SingleBlogPost';
class BlogBody extends Component {
  state = {
    posts: []
  };

  fetchData(navigator) {
    axios
      .get(`http://localhost:3000/${navigator}`)
      .then(response => this.setState({ posts: response.data }));
  }
  componentDidMount() {
    this.fetchData(this.props.navigator);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.navigator !== prevProps.navigator) {
      this.fetchData(this.props.navigator);
    }
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
