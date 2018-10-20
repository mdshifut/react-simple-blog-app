import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="blog-home__main-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-uppercase">
              <div className="blog-home__main-header__text">
                React
                <h3>Blogger</h3>
                Simple blogger template
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
