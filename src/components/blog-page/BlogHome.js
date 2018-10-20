import React, { Component } from 'react';
import './Blog.scss';
import Header from './Header';
import BlogBody from './BlogBody';
import Navigation from './Navigation';
import Footer from './Footer';
class BlogHome extends Component {
  state = {
    navigator: 'posts'
  };

  navClickHandeler = category => {
    if (category === 'home') {
      this.setState({
        navigator: 'posts'
      });
    } else {
      this.setState({
        navigator: `posts?category=${category}`
      });

      console.log(this.state.navigator);
    }
  };
  render() {
    return (
      <div className="blog-home">
        <Header />

        <Navigation navClickHandeler={this.navClickHandeler} />

        <BlogBody navigator={this.state.navigator} />
        <Footer />
      </div>
    );
  }
}

export default BlogHome;
