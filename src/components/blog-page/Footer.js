import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-6">&copy; Md Shifut Hossain</div>
            <div className="col-6 text-right">
              Developed by{' '}
              <a href="https://www.facebook.com/mdshifut.hossain">
                Md Shifut Hossain
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
