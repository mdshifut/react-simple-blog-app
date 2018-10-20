import React, { Component } from 'react';
import './Blog.scss';
import Header from './Header';
import BlogBody from './BlogBody';
import Footer from './Footer';
class BlogHome extends Component {
  render() {
    return (
      <div className="blog-home">
        <Header />
        <BlogBody />
        <Footer />
      </div>
    );
  }
}

export default BlogHome;
