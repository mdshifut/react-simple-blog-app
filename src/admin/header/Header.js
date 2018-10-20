import React, { Component } from 'react';
import './header.scss';
class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="row">
          <div className="col-md-3">
            <h3>Blog Admin panel</h3>
          </div>
          <div className="col-md-9 text-right">
            <div className="main-header__right">
              <a href="index.html" className="blog-page">
                Go to blog page
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
