import React, { Component } from 'react';
import classnames from 'classnames';

class SingleBlogPost extends Component {
  render() {
    return (
      <div
        className={classnames('single-blog-post', {
          'hero-post': this.props.heroImage
        })}
      >
        <h3>
          <a href={this.props.title.replace(/\s+/g, '-').toLowerCase()}>
            {this.props.title}
          </a>
        </h3>
        <p className="single-blog-post__meta">
          by <span>{this.props.author}</span> - Publish on:
          {'  '} {this.props.publish}
        </p>
        <div
          className="single-blog-post__image"
          style={{ backgroundImage: `url(${this.props.imageURL})` }}
        />

        <p>
          {this.props.heroImage
            ? this.props.content.slice(1, 500)
            : this.props.content.slice(1, 150)}
        </p>
        <div className="single-blog-post__footer clearfix">
          <span className="category float-left">{this.props.category}</span>
          <a
            className="float-right btn btn-danger"
            href={this.props.title.replace(/\s+/g, '-').toLowerCase()}
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default SingleBlogPost;
